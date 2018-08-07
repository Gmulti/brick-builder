import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as _ from 'lodash'

import UnitValueCss from '../../UnitValueCss'
import Title from '../../Title'
import Field from '../../../../../../ui/Settings/Field'
import Input from '../../../../../../ui/Settings/Input'

class Value extends Component {
    render() {
        const { component, title = '', styleKey, handleChange } = this.props

        const _value = component.getAttributes()[styleKey]

        return (
            <Field label={title}>
                <Input handleChange={handleChange} value={_value} />
            </Field>
        )
    }
}

Value.propTypes = {
    unitValueReadOnly: PropTypes.bool,
    valuesAvailable: PropTypes.array
}

export default Value
