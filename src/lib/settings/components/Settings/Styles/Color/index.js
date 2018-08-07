import React, { Component } from "react"
import BaseStylesColor from "../../BaseStyles/Color"
import HandleChangeColor from "../../../Handle/HandleChangeColor";

class Color extends Component {

    styleKey = "color"

    styleKeyJS = "color"

    title = "Color"

    render() {

        return (
            <HandleChangeColor
                title={this.title}
                styleKey={this.styleKey}
                styleKeyJS={this.styleKeyJS}
                {...this.props}
            >
                <BaseStylesColor />
            </HandleChangeColor>
        )
    }
}


export default Color
