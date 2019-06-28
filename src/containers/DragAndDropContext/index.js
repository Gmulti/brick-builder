import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Builder from '../Builder'

class DragAndDropContext extends Component {
    componentWillMount() {
        this.element = document.querySelector('#root-deli-builder')
    }

    render() {
        const _window = this.props.window || window

        return (
            <DragDropContextProvider backend={HTML5Backend} window={_window}>
                <Builder />
            </DragDropContextProvider>
        )
    }
}

DragAndDropContext.propTypes = {
    window: PropTypes.object
}

export default DragAndDropContext
