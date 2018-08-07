import React, { Component, Fragment } from 'react'
import * as _ from 'lodash'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import Title from '../../Title'
import Field from '../../../../../../ui/Settings/Field'

class SelectValueSearch extends Component {
    render() {
        const {
            component,
            title = '',
            styleKey,
            handleChange,
            handleInputChange,
            options,
            valueSelected
        } = this.props

        const _value =
            component.getAttributes()[styleKey] || valueSelected || null

        return (
            <Field label={title}>
                <Select
                    name="form-field-name"
                    value={_value}
                    onChange={handleChange}
                    onInputChange={handleInputChange}
                    options={options}
                />
            </Field>
        )
    }
}

export default SelectValueSearch
