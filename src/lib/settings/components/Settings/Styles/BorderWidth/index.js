import React, { Component } from 'react'

import TypeObject from '../../BaseStyles/TypeObject'
import HandleChangeWithType from '../../../Handle/HandleChangeWithType'

class BorderWidth extends Component {
    styleKey = 'border-width'

    title = 'Border Width'

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

export default BorderWidth
