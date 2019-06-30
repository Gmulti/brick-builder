import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { intersection, isUndefined } from 'lodash'

class UnitValueCss extends Component {
    defaultUnitValues = ['px', 'em', '%']

    getUnitValues = () => {
        if (isUndefined(this.props.valuesAvailable)) {
            return this.defaultUnitValues
        }

        return intersection(this.defaultUnitValues, this.props.valuesAvailable)
    }

    render() {
        return (
            <>
                <select
                    onChange={this.props.handleChange}
                    value={this.props.value}
                >
                    {this.getUnitValues().map((option, key) => {
                        return (
                            <option key={key} value={option}>
                                {option}
                            </option>
                        )
                    })}
                </select>
            </>
        )
    }
}

UnitValueCss.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    valuesAvailable: PropTypes.array
}

export default UnitValueCss
