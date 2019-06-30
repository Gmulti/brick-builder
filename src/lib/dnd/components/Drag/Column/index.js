import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { MOVE_COLUMN } from '../../../constants'

const cardDrag = {
    beginDrag(props) {
        return {
            keySection: props.keySection,
            order: props.order,
            source: MOVE_COLUMN
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

@DragSource(MOVE_COLUMN, cardDrag, collectDrag)
class DragColumn extends Component {
    render() {
        const { connectDragSource, connectDragPreview } = this.props

        return connectDragPreview(
            connectDragSource(<div>{this.props.children}</div>)
        )
    }
}

DragColumn.propTypes = {
    order: PropTypes.number.isRequired,
    keySection: PropTypes.number.isRequired
}

export default DragColumn
