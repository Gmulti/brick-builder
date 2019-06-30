import React, { Component } from 'react'

import Field from '../../../../../../ui/Settings/Field'

class SelectValue extends Component {
    render() {
        const {
            component,
            title = '',
            styleKey,
            handleChange,
            options,
            defaultValue
        } = this.props

        const _value =
            component.getAttributes()[styleKey] || defaultValue || null

        return (
            <Field label={title}>
                <select onChange={handleChange} value={_value}>
                    {options.map((option, key) => {
                        return (
                            <option key={key} value={option.value}>
                                {option.text}
                            </option>
                        )
                    })}
                </select>
            </Field>
        )
    }
}

export default SelectValue
