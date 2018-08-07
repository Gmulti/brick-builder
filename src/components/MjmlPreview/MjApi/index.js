import React, { Component } from "react"
import { connect } from "react-redux"
import * as _ from "lodash"

import { previewComponent } from "../../../hoc/previewComponent"
import MjApiModel from "../../../models/MjModels/MjApi"

const mapStateToProps = (state, { component }) => ({
    component: _.assignIn(new MjApiModel(), component)
})

@connect(mapStateToProps)
@previewComponent()
export class MjApi extends Component {
    render() {
        const { extractComponentHtml, getHtml, getIndex } = this.props

        return (
            <div id={getIndex()} dangerouslySetInnerHTML={{ __html: "test" }} />
        )
    }
}

export default MjApi
