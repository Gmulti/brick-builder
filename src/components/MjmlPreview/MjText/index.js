import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { assignIn, debounce } from 'lodash'
import { Editor } from '@tinymce/tinymce-react'

import { previewComponent } from '../../../hoc/previewComponent'
import MjTextModel from '../../../models/MjModels/MjText'
import TemplatingAction from '../../../reducers/Templating/actions'

function mapStateToProps(state, ownProps) {
    return {
        component: assignIn(new MjTextModel(), ownProps.component)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                updateComponent: TemplatingAction.updateComponent
            },
            dispatch
        )
    }
}

const fontLoader = font => {
    if (document.querySelector(`#${font}`)) {
        return
    }

    var headID = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.id = font
    link.href = `https://fonts.googleapis.com/css?family=${font}`

    headID.appendChild(link)
}

const fontSystem = ['Arial', 'Tahoma', 'Trebuchet MS', 'Georgia', 'Verdana']

@connect(
    mapStateToProps,
    mapDispatchToProps
)
@previewComponent()
class MjText extends Component {
    constructor(props) {
        super(props)

        this._handleChangeThrottle = debounce(
            component => {
                props.actions.updateComponent(component)
            },
            500,
            { leading: false, trailing: true }
        )
    }

    componentWillMount() {
        const { component } = this.props

        if (
            fontSystem.indexOf(component.componentAttributes['font-family']) >=
            0
        ) {
            return
        }

        fontLoader(component.componentAttributes['font-family'])
    }

    _handleChange = content => {
        let { component } = this.props

        component.content = content

        this._handleChangeThrottle(component)
    }

    render() {
        const { component, getIndex } = this.props

        const _style = component.getStylePreview()

        return (
            <div id={getIndex()} style={_style}>
                <style>
                    {`
                    #${getIndex()} * {
                        font-family:${
                            component.componentAttributes['font-family']
                        };
                    }
                    #${getIndex()} p {
                        margin: 0;
                    }
                    `}
                </style>
                <Editor
                    inline
                    init={{
                        menubar: false,
                        themes: 'modern',
                        paste_as_text: true,
                        relative_urls: false,
                        convert_urls: false
                    }}
                    plugins="paste textcolor colorpicker lists"
                    toolbar="bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | blockquote bullist numlist | link"
                    value={component.content}
                    onEditorChange={this._handleChange}
                />
            </div>
        )
    }
}

export default MjText
