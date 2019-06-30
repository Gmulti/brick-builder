import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isUndefined, isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { bindActionCreators } from 'redux'
import { DND } from '../../../../index'

import { MOVE_COMPONENT, ADD_COMPONENT } from '../../../constants'
import TemplatingAction from '../../../reducers/Templating/actions'
import { dropHover } from '../../../hoc/dropHover'
import styled from 'styled-components'

const SCDropColumn = styled.div`
    position: relative;
`

const SCDropColumnHoverElement = styled.div`
    opacity: 0;
    position: absolute;
    height: 0px;
    width: 100%;
    background: #02a0d2;
    z-index: 1000;
    transition: all 0.2s ease -in;
`

function mapDispatchToProps(dispatch) {
    const _actions = new TemplatingAction()
    return {
        actions: bindActionCreators(
            {
                updateComponentPosition: _actions.updateComponentPosition,
                addComponent: _actions.addComponent
            },
            dispatch
        )
    }
}

const cardDrop = {
    drop(props, monitor, component) {
        let payload
        switch (monitor.getItemType()) {
            case MOVE_COMPONENT:
                payload = DND.Helpers.Drop.Move.preparePayloadComponent(
                    props,
                    monitor,
                    component
                )

                if (isUndefined(payload) || isEmpty(payload)) {
                    return
                }

                props.actions.updateComponentPosition(payload)
                break
            case ADD_COMPONENT:
                payload = DND.Helpers.Drop.Add.preparePayloadComponent(
                    props,
                    monitor,
                    component
                )

                payload = DND.Helpers.Drop.Create.Component(
                    payload.keySection,
                    payload.keyColumn,
                    {
                        ...monitor.getItem().params,
                        ...payload,
                        order: payload.order
                    }
                )

                props.actions.addComponent(payload)
                break
        }
    },
    hover(props, monitor, component) {
        if (
            !monitor.canDrop() ||
            (monitor.getItemType() === MOVE_COMPONENT &&
                (monitor.getItem().order == props.order &&
                    monitor.getItem().keyColumn == props.keyColumn &&
                    monitor.getItem().keySection == props.keySection))
        ) {
            return
        }

        const rawComponent = DND.Helpers.undecorate(component)

        rawComponent.setElementHover(
            DND.Helpers.getAfterOrBefore(monitor, component)
        )
    }
}

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isElementOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

@connect(
    null,
    mapDispatchToProps
)
@DropTarget([MOVE_COMPONENT, ADD_COMPONENT], cardDrop, collectDrop)
@dropHover()
class DropComponent extends Component {
    render() {
        const {
            connectDropTarget,
            children,
            elementHover,
            getStylesHover
        } = this.props

        // const {
        //     elementHover
        // } = this.state

        let _style = getStylesHover()

        return connectDropTarget(
            <span>
                <SCDropColumn>
                    {children}
                    <SCDropColumnHoverElement style={_style} />
                </SCDropColumn>
            </span>
        )
    }
}

DropComponent.propTypes = {
    component: PropTypes.object.isRequired
}

export default DropComponent
