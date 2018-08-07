import React, { Component } from 'react';
import PropTypes from "prop-types"
import { DragSource } from 'react-dnd';
import { ADD_COMPONENT } from "../../../constants"

const cardDrag = {
    beginDrag(props) {
        return {
            params : props.params
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

@DragSource(ADD_COMPONENT, cardDrag, collectDrag)
export class DragComponent extends Component  {

    render() {
        const { connectDragSource } = this.props

        return connectDragSource(
            <div>
                {this.props.children}
            </div>
        )
    }
}

DragComponent.propTypes = {
    params: PropTypes.object
}

export default DragComponent

