import React, { Component } from 'react'

import HandleChangeWithType from '../../../Handle/HandleChangeWithType'
import TypeObject from '../../BaseStyles/TypeObject'

class Width extends Component {
    styleKey = 'width'

    title = 'Width'

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

export default Width
