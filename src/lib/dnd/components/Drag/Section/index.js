import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { MOVE_SECTION } from '../../../constants'

const cardDrag = {
    beginDrag(props) {
        return {
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

@DragSource(MOVE_SECTION, cardDrag, collectDrag)
class DragSection extends Component {
    render() {
        const { connectDragSource, connectDragPreview } = this.props

        return connectDragPreview(
            connectDragSource(<div>{this.props.children}</div>)
        )
    }
}

DragSection.propTypes = {
    order: PropTypes.number.isRequired
}

export default DragSection
