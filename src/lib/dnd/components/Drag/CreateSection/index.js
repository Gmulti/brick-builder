import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { ADD_SECTION } from '../../../constants'

const cardDrag = {
    beginDrag(props) {
        return {
            params: props.params
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

@DragSource(ADD_SECTION, cardDrag, collectDrag)
class DragSection extends Component {
    render() {
        const { connectDragSource } = this.props

        return connectDragSource(<div>{this.props.children}</div>)
    }
}

DragSection.propTypes = {
    params: PropTypes.object
}

export default DragSection
