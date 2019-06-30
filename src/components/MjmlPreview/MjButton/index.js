import React, { Component } from 'react'
import { connect } from 'react-redux'
import { assignIn } from 'lodash'

import MjButtonModel from '../../../models/MjModels/MjButton'
import { previewComponent } from '../../../hoc/previewComponent'

const mapStateToProps = (state, { component }) => {
    return {
        component: assignIn(new MjButtonModel(), component)
    }
}

@connect(mapStateToProps)
@previewComponent()
class MjButton extends Component {
    render() {
        const { extractComponentHtml, getHtml, getIndex } = this.props

        const _html = extractComponentHtml(getHtml().html)
        return (
            <div id={getIndex()} dangerouslySetInnerHTML={{ __html: _html }} />
        )
    }
}

export default MjButton
