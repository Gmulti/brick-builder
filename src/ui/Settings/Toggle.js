import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

class Toggle extends React.Component {
    static defaultProps = {
        isDefaultChecked: false
    }

    state = {
        isFocused: false,
        isChecked: this.props.isDefaultChecked
    }

    handleBlur = event => {
        this.setState({
            isFocused: false
        })
    }

    handleFocus = event => {
        this.setState({ isFocused: true })
    }

    handleChange = event => {
        if (this.props.isDisabled) {
            return
        }
        this.setState({ isChecked: !this.state.isChecked })
        this.props.onChange(event)
    }

    render() {
        const { isDisabled, name, size, value } = this.props
        const { isFocused, isChecked } = this.state

        const id = uuid()

        const styledProps = {
            isChecked,
            isDisabled,
            isFocused,
            size
        }

        return (
            <Label size={size} isDisabled={isDisabled} htmlFor={id}>
                <Input
                    checked={isChecked}
                    disabled={isDisabled}
                    id={id}
                    name={name}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    type="checkbox"
                    value={value}
                />
                <Slide {...styledProps}>
                    <Handle
                        isChecked={isChecked}
                        isDisabled={isDisabled}
                        size={size}
                    />
                </Slide>
            </Label>
        )
    }
}

export default Toggle

const Slide = styled.div`
    box-sizing: content-box;
    background-color: ${props =>
        props.isChecked ? props.theme.toggleBgActive : props.theme.toggleBg};
    border-radius: ${props => props.theme.toggleSize};
    display: block;
    height: ${props => props.theme.toggleSize};
    padding: 2px;
    position: relative;
    transition: ${props => props.theme.toggleTransition};
    width: calc(${props => props.theme.toggleSize}*2);
`

const Handle = styled.span`
    background-color: ${props => props.theme.handleBg};
    border-radius: 50%;
    content: '';
    height: ${props => props.theme.toggleSize};
    position: absolute;
    transform: ${props =>
        props.isChecked ? `translateX(${props.theme.toggleSize})` : 'initial'};
    transition: ${props => props.theme.toggleTransition};
    width: ${props => props.theme.toggleSize};
`

const Input = styled.input`
    opacity: 0;
    position: absolute;

    &:focus {
        outline: none !important;
    }
`

const Label = styled.label`
    display: inline-block;
    padding: 1px;
`
