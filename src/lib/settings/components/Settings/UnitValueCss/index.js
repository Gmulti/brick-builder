import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

import * as _ from "lodash"

class UnitValueCss extends Component {

    defaultUnitValues = [
        "px",
        "em",
        "%"
    ]

    getUnitValues = () => {
        if(_.isUndefined(this.props.valuesAvailable)){
            return this.defaultUnitValues
        }
 
        return _.intersection(this.defaultUnitValues, this.props.valuesAvailable)
    }

    render() {

        return (
            <Fragment>
                <select
                    onChange={this.props.handleChange}
                    value={this.props.value}
                >
                    {this.getUnitValues().map((option, key) => {
                        return (
                            <option
                                key={key}
                                value={option}
                            >
                                {option}
                            </option>
                        )
                    })}
                </select>
            </Fragment>
        )
    }
}

UnitValueCss.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    valuesAvailable: PropTypes.array
}

export default UnitValueCss
