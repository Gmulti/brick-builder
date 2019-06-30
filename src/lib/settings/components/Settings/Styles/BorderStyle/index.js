import React, { Component } from 'react'
import PropTypes from 'prop-types'

import HandleChangeValue from '../../../Handle/HandleChangeValue'
import SelectValue from '../../BaseStyles/SelectValue'

class BorderStyle extends Component {
    title = 'Border Style'

    defaultValue = 'solid'

    styleKey = 'border-style'

    options = [
        {
            value: 'dashed',
            text: 'Dashed'
        },
        {
            value: 'dotted',
            text: 'Dotted'
        },
        {
            value: 'solid',
            text: 'Solid'
        }
    ]

    render() {
        return (
            <HandleChangeValue
                title={this.title}
                options={this.options}
                styleKey={this.styleKey}
                defaultValue={this.defaultValue}
                {...this.props}
            >
                <SelectValue />
            </HandleChangeValue>
        )
    }
}

BorderStyle.propTypes = {
    component: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

export default BorderStyle
