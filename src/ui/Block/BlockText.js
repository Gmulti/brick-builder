import React from 'react'
import styled from 'styled-components'

const SCTextarea = styled.textarea`
    width: 100%;
    /* height: ${props => props.height}; */
    background: transparent;
    border: none;
    font-size: 15px;
    padding: 0.3em 1em;
    outline: none;
    resize: none;
    line-height: 1.5;
`

class BlockText extends React.Component {
    state = {
        text: this.props.defaultValue || ''
        // height: null
    }

    handleChange = e => {
        e.preventDefault()
        const textarea = e.currentTarget
        this.setState({
            text: textarea.value
            // height: textarea.scrollHeight + 'px'
        })
    }

    render() {
        return (
            <SCTextarea
                name={this.props.name}
                onChange={this.handleChange}
                value={this.state.text}
                height={this.state.height}
            />
        )
    }
}
export default BlockText
