import React, { Component } from 'react'

import { Provider } from 'react-redux'
import configureStore from './stores'
import DragAndDropContext from './containers/DragAndDropContext'
import { ThemeProvider } from 'styled-components'
import Theme from './ui/theme'
import 'tinymce'
import 'tinymce/themes/modern/theme'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/lists'

class Initialize extends Component {
    render() {
        const { initialState } = this.props
        const store = configureStore(initialState)

        return (
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    <DragAndDropContext />
                </ThemeProvider>
            </Provider>
        )
    }
}

export default Initialize
