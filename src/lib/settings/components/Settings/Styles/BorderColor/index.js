import React, { Component } from "react"
import Color from "../../BaseStyles/Color"
import HandleChangeColor from "../../../Handle/HandleChangeColor"

class BorderColor extends Component {

    styleKey = "border-color"

    styleKeyJS = "borderColor"

    title = "Border Color"

    render() {

        return (
            <HandleChangeColor
                title={this.title}
                styleKey={this.styleKey}
                styleKeyJS={this.styleKeyJS}
                {...this.props}
            >
                <Color />
            </HandleChangeColor>
        )
    }
}


export default BorderColor
