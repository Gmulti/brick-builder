import React, { Component } from 'react'
import { connect } from 'react-redux'
import { assignIn } from 'lodash'

import { previewComponent } from '../../../hoc/previewComponent'
import MjSocialModel from '../../../models/MjModels/MjSocial'

const mapStateToProps = (sate, { component }) => ({
    component: assignIn(new MjSocialModel(), component)
})

@connect(mapStateToProps)
@previewComponent()
class MjSocial extends Component {
    render() {
        const { extractComponentHtml, getHtml, getIndex } = this.props

        const _html = extractComponentHtml(getHtml().html)

        return (
            <div id={getIndex()} dangerouslySetInnerHTML={{ __html: _html }} />
        )
    }
}

export default MjSocial
