import React, { Component } from "react"
import Color from "../../BaseStyles/Color"
import HandleChangeColor from "../../../Handle/HandleChangeColor";

class BackgroundColor extends Component {

    styleKey = "background-color"

    styleKeyJS = "backgroundColor"

    title = "Background Color"

    render(){

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


export default BackgroundColor
