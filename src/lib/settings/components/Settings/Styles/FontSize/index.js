import React, { Component } from 'react'

import HandleChangeWithType from '../../../Handle/HandleChangeWithType'
import TypeObjectRange from '../../BaseStyles/TypeObjectRange'

class FontSize extends Component {
    styleKey = 'font-size'

    title = 'Font size'

    render() {
        return (
            <HandleChangeWithType
                title={this.title}
                styleKey={this.styleKey}
                {...this.props}
            >
                <TypeObjectRange />
            </HandleChangeWithType>
        )
    }
}

export default FontSize
