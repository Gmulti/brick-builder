import React, { Component, Fragment } from "react"
import * as _ from "lodash"

import HandleChangeWithType from "../../../Handle/HandleChangeWithType"
import TypeObject from "../../BaseStyles/TypeObject"

class BorderRadius extends Component {

    styleKey = "border-radius"

    title = "Border radius"

    render() {
        return (
            <HandleChangeWithType
                title={this.title}
                styleKey={this.styleKey}
                {...this.props}
            >
                <TypeObject />
            </HandleChangeWithType>
        )
    }

}

export default BorderRadius
