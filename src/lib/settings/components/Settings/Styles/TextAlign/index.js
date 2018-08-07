import React, { Component } from "react"
import ButtonGroup from "../../BaseStyles/ButtonGroup"
import HandleChangeValue from "../../../Handle/HandleChangeValue";

class TextAlign extends Component {

    styleKey = "text-align"

    styleKeyJS = "textAlign"

    title = "Text align"

    buttons = [
        {
            key : "left",
            value : "left",
            nameIcon: "align-left"
        },
        {
            key : "center",
            value : "center",
            nameIcon: "align-center"
        },
        {
            key : "right",
            value : "right",
            nameIcon: "align-right"
        }

    ]

    render() {

        return (
            <HandleChangeValue
                title={this.title}
                styleKey={this.styleKey}
                styleKeyJS={this.styleKeyJS}
                buttons={this.buttons}
                {...this.props}
            >
                <ButtonGroup />
            </HandleChangeValue>
        )
    }
}


export default TextAlign
