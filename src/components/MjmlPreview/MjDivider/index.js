import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as _ from "lodash"

import MjDividerModel from '../../../models/MjModels/MjDivider'
import { previewComponent } from '../../../hoc/previewComponent';

function mapStateToProps(state, ownProps) {
    return {
        component: _.assignIn(new MjDividerModel(), ownProps.component),
    }
}

@connect(mapStateToProps)
@previewComponent()
export class MjDivider extends Component  {
    render() {
        const {
            extractComponentHtml,
            getHtml,
            getIndex
        } = this.props

        const _html = extractComponentHtml(getHtml().html)

        return (
            <div
                id={getIndex()}
                dangerouslySetInnerHTML={{ "__html": _html }}
            />
        )
    }
}

export default MjDivider

