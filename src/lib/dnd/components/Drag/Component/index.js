import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { MOVE_COMPONENT } from '../../../constants'

const cardDrag = {
    beginDrag(props) {
        return {
            keySection: props.keySection,
            keyColumn: props.keyColumn,
            order: props.order
        }
    }
}

function collectDrag(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

@DragSource(MOVE_COMPONENT, cardDrag, collectDrag)
class DragComponent extends Component {
    render() {
        const { connectDragPreview, connectDragSource } = this.props

        return connectDragPreview(
            connectDragSource(<span>{this.props.children}</span>)
        )
    }
}

DragComponent.propTypes = {
    order: PropTypes.number.isRequired,
    keySection: PropTypes.number.isRequired,
    keyColumn: PropTypes.number.isRequired
}

export default DragComponent
