import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import * as _ from 'lodash'

import Title from '../../Title'
import InputColor from '../../../../../../ui/Settings/InputColor'
import Field from '../../../../../../ui/Settings/Field'

class Color extends Component {
    render() {
        const {
            component,
            title = '',
            handleChangeComplete,
            handleChange,
            styleKey,
            styleKeyJS
        } = this.props

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
