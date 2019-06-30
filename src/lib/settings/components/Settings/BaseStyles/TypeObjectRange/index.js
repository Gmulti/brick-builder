import React, { Component } from 'react'

import Range from '../../../../../../ui/Settings/Range'
import Text from '../../../../../../ui/svg/text'
import Field from '../../../../../../ui/Settings/Field'

class TypeObjectRange extends Component {
    render() {
        const {
            // unitValueReadOnly,
            title = ''
            // typeObject,
            // handleChange,
            // handleChangeType,
            // minInput = 0,
            // maxInput = null,
            // typeAvailables = ['px', '%']
        } = this.props

        return (
            <Field label={title}>
                <Range LogoText={Text} {...this.props} />
                {/* {!_.isEmpty(title) && <Title title={title} />}
                <input
                    onChange={handleChange}
                    type="range"
                    value={typeObject.value}
                    min={minInput}
                    max={maxInput}
                />
                <input
                    min={minInput}
                    max={maxInput}
                    onChange={handleChange}
                    type="number"
                    value={typeObject.value}
                />
                {(_.isUndefined(unitValueReadOnly) || !unitValueReadOnly) && (
                    <UnitValueCss
                        value={typeObject.type}
                        valuesAvailable={typeAvailables}
                        handleChange={handleChangeType}
                    />
                )}
                {!_.isUndefined(unitValueReadOnly) &&
                    unitValueReadOnly && <span>{typeObject.type}</span>} */}
            </Field>
        )
    }
}

export default TypeObjectRange
