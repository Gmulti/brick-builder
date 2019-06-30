import React, { Component } from 'react'

import { connect } from 'react-redux'
import { each, find, isUndefined, assignIn, filter } from 'lodash'

import MjContainer from '../../models/MjModels/MjContainer'
import transformStructureToMjml from '../../helpers/transformStructureToMjml'
import constructStructureTemplating from '../../helpers/constructStructureTemplating'
import Fonts from '../../lib/templating/constants/fonts'
import Toolbar from '../../ui/Toolbar'

const GoogleFonts = filter(Fonts, { google_font: true })

const headLinkFont = components => {
    let _links = []

    each(components, component => {
        if (component.attributes && component.attributes['font-family']) {
            const googleFont = find(GoogleFonts, {
                value: component.attributes['font-family']
            })

            if (!isUndefined(googleFont)) {
                _links.push(googleFont)
            }
        }
    })

    // var head = document.getElementsByTagName('head')[0]
    // var link = document.createElement('link')
    // link.rel = 'stylesheet'
    // link.type = 'text/css'
    // link.href = '/css/index.css'
    // link.media = 'all'
    // head.appendChild(link)
}

const mapStateToProps = ({ Templating }) => ({ config: Templating })

@connect(mapStateToProps)
class Header extends Component {
    openPreview = () => {
        const { config } = this.props

        const _tpl = transformStructureToMjml(
            constructStructureTemplating(config),
            {
                container: assignIn(new MjContainer(), config.container)
            }
        )

        var newWin = window.open('url', 'Preview ', 'height=600,width=600')
        newWin.document.write(_tpl.html)
    }

    render() {
        const { config } = this.props
        headLinkFont(config.components)

        return <Toolbar onClickPreview={this.openPreview} />
    }
}

export default Header
