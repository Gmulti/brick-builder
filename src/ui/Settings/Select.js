import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid'
import propTypes from 'prop-types'

import Arrow from '../svg/arrow'

const SCSelectWrap = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${props => props.theme.inputBorder};
    border-radius: 3px;
    height: ${props => props.theme.inputSize};
    padding: 0 0 0 1em;

    & > svg {
        position: absolute;
        right: 0.5em;
        top: 50%;
        margin-top: -5px;
        color: #555d65;
        pointer-events: none;
    }

    select {
        width: 100%;
        height: 100%;
        font-size: 12px;
        -webkit-appearance: none;
        border: none;
        background: transparent;
        outline: none;
        min-width: 120px;
        padding-right: 1em;
    }
`

class Select extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <SCSelectWrap>
                <select>
                    {this.props.options.map(option => {
                        const uid = uuid()
                        return (
                            <option value={option.value} key={uid}>
                                {option.label}
                            </option>
                        )
                    })}
                </select>
                <Arrow direction={'down'} />
            </SCSelectWrap>
        )
    }
}

Select.propTypes = {
    options: propTypes.arrayOf(
        propTypes.shape({
            value: propTypes.string.isRequired,
            label: propTypes.string.isRequired
        })
    ).isRequired
}

export default Select
