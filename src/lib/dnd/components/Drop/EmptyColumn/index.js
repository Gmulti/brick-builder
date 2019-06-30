import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isUndefined, isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { bindActionCreators } from 'redux'
import { DND } from '../../../../index'

import {
    ADD_COMPONENT,
    MOVE_COLUMN,
    MOVE_COMPONENT,
    FROM_EMPTY_COLUMN
} from '../../../constants'
import TemplatingAction from '../../../reducers/Templating/actions'
import { dropHover } from '../../../hoc/dropHover'
import styled from 'styled-components'

const SCDropEmptyColumn = styled.div`
    position: relative;
`

const SCDropEmptyColumnHoverElement = styled.div`
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
                updateComponentPosition: _actions.updateComponentPosition,
                addColumn: _actions.addColumn,
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
            case ADD_COMPONENT:
                payload = DND.Helpers.Drop.Add.preparePayloadComponent(
                    props,
                    monitor,
                    component,
                    FROM_EMPTY_COLUMN
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
            case MOVE_COMPONENT:
                payload = DND.Helpers.Drop.Move.preparePayloadComponent(
                    props,
                    monitor,
                    component,
                    FROM_EMPTY_COLUMN
                )

                if (isUndefined(payload) || isEmpty(payload)) {
                    return
                }

                props.actions.updateComponentPosition(payload)
                break
        }
    }
}

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

@connect(
    null,
    mapDispatchToProps
)
@dropHover()
@DropTarget([ADD_COMPONENT, MOVE_COLUMN, MOVE_COMPONENT], cardDrop, collectDrop)
class EmptyColumn extends Component {
    render() {
        const { connectDropTarget, children, getStylesHover } = this.props

        let _style = getStylesHover()

        return connectDropTarget(
            <span>
                <SCDropEmptyColumn>
                    {children}
                    <SCDropEmptyColumnHoverElement style={_style} />
                </SCDropEmptyColumn>
            </span>
        )
    }
}

EmptyColumn.propTypes = {
    column: PropTypes.object.isRequired
}

export default EmptyColumn
