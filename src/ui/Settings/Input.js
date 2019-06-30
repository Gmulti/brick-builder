import React from 'react'
import styled from 'styled-components'
import { debounce } from 'lodash'

export const SCInput = styled.input`
    border: 1px solid ${props => props.theme.inputBorder};
    cursor: inherit;
    height: ${props => props.theme.inputSize};
    font-size: 12px;
    line-height: inherit;
    margin: 0;
    outline: none;
    padding: 0;
    width: 100%;
    border-radius: 3px;
    padding: 0 0.5em;
    :invalid {
        box-shadow: none;
    }

    &:focus {
        border-color: ${props => props.theme.inputBorderActive};
    }
`

class Input extends React.Component {
    constructor(props) {
        super(props)
        this._handleChangeThrottle = debounce(
            value => {
                props.handleChange(value)
            },
            500,
            { leading: false, trailing: true }
        )
    }

    state = {
        value: this.props.value
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({ value })

        this._handleChangeThrottle(value)
    }

    render() {
        const { value } = this.state
        return (
            <SCInput
                {...this.props}
                value={value}
                onChange={this.handleChange}
            />
        )
    }
}

export default Input
