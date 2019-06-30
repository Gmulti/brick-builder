import React, { Component } from 'react'

import InputColor from '../../../../../../ui/Settings/InputColor'
import Field from '../../../../../../ui/Settings/Field'

class Color extends Component {
    render() {
        const { component, title = '', styleKey } = this.props

        return (
            <Field label={title}>
                <InputColor
                    color={component.getAttributes()[styleKey]}
                    {...this.props}
                />
            </Field>
        )
    }
}

export default Color
