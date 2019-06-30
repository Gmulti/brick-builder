import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isUndefined } from 'lodash'
import styled from 'styled-components'

import UnitValueCss from '../../UnitValueCss'
import Field from '../../../../../../ui/Settings/Field'
import Input from '../../../../../../ui/Settings/Input'

const SCInputSuffix = styled.span`
    text-align: center;
    line-height: 30px;
    display: inline-block;
    padding: 0 6px;
    min-width: 28px;
    background: #eaeef0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    user-select: none;
    margin-left: -2px;
    color: #778f9b;
`
class TypeObject extends Component {
    render() {
        const {
            unitValueReadOnly,
            title = '',
            typeObject = { type: 'px', value: 0 },
            handleChange,
            handleChangeType,
            minInput = 0,
            maxInput = null,
            typeAvailables = ['px', '%']
        } = this.props

        return (
            <Field label={title}>
                <Input
                    handleChange={handleChange}
                    value={typeObject.value}
                    maxInput={maxInput}
                    minInput={minInput}
                    type="number"
                />
                {(isUndefined(unitValueReadOnly) || !unitValueReadOnly) && (
                    <UnitValueCss
                        value={typeObject.type}
                        valuesAvailable={typeAvailables}
                        handleChange={handleChangeType}
                    />
                )}
                {!isUndefined(unitValueReadOnly) && unitValueReadOnly && (
                    <SCInputSuffix>{typeObject.type}</SCInputSuffix>
                )}
            </Field>
        )
    }
}

TypeObject.propTypes = {
    unitValueReadOnly: PropTypes.bool,
    valuesAvailable: PropTypes.array
}

export default TypeObject
