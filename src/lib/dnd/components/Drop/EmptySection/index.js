import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isUndefined, isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { bindActionCreators } from 'redux'
import { DND } from '../../../../index'
import styled from 'styled-components'

import {
    ADD_COLUMN,
    ADD_COMPONENT,
    MOVE_COLUMN,
    MOVE_COMPONENT,
    FROM_EMPTY_SECTION
} from '../../../constants'
import TemplatingAction from '../../../reducers/Templating/actions'
import { dropHover } from '../../../hoc/dropHover'

const SCDropEmptySection = styled.div`
    position: relative;
`
const SCDropEmptySectionHoverElement = styled.div`
    opacity: 0;
    position: absolute;
    height: 0px;
    width: 100%;
    background: #02a0d2;
    z-index: 1000;
    transition: all 0.2s ease-in;
`

function mapDispatchToProps(dispatch) {
    const _actions = new TemplatingAction()
    return {
        actions: bindActionCreators(
            {
                updateSectionPosition: _actions.updateSectionPosition,
                updateComponentPosition: _actions.updateComponentPosition,
                addColumn: _actions.addColumn,
                addColumns: _actions.addColumns,
                addComponent: _actions.addComponent
            },
            dispatch
        )
    }
}

const cardDrop = {
    drop(props, monitor, component) {
        let newColumn, payload

        switch (monitor.getItemType()) {
            case MOVE_COMPONENT:
                newColumn = DND.Helpers.Drop.Create.Column(props.section.key)
                payload = DND.Helpers.Drop.Move.preparePayloadComponent(
                    {
                        ...props,
                        column: newColumn
                    },
                    monitor,
                    component,
                    FROM_EMPTY_SECTION
                )

                if (isUndefined(payload) || isEmpty(payload)) {
                    return
                }

                props.actions.addColumn(newColumn).then(() => {
                    props.actions.updateComponentPosition(payload)
                })
                break
            case ADD_COMPONENT:
                newColumn = DND.Helpers.Drop.Create.Column(props.section.key)
                payload = DND.Helpers.Drop.Add.preparePayloadComponent(
                    {
                        ...props,
                        column: newColumn
                    },
                    monitor,
                    component,
                    FROM_EMPTY_SECTION
                )

                if (isUndefined(payload) || isEmpty(payload)) {
                    return
                }

                payload = DND.Helpers.Drop.Create.Component(
                    payload.keySection,
                    payload.keyColumn,
                    {
                        ...monitor.getItem().params,
                        ...payload,
                        order: payload.order
                    }
                )
                props.actions.addColumn(newColumn).then(() => {
                    props.actions.addComponent(payload)
                })
                break
        }
    },
    hover(props, monitor, component) {
        if (
            !monitor.canDrop() ||
            (!!props.order && monitor.getItem().order === props.order)
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
@DropTarget(
    [ADD_COLUMN, ADD_COMPONENT, MOVE_COLUMN, MOVE_COMPONENT],
    cardDrop,
    collectDrop
)
@dropHover()
class EmptySection extends Component {
    render() {
        const { connectDropTarget, children, getStylesHover } = this.props

        const _style = getStylesHover()

        return connectDropTarget(
            <span>
                <SCDropEmptySection>
                    {children}
                    <SCDropEmptySectionHoverElement style={_style} />
                </SCDropEmptySection>
            </span>
        )
    }
}

EmptySection.propTypes = {
    section: PropTypes.object.isRequired
}

export default EmptySection
