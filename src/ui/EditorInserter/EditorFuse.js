import React from 'react'
import Fuse from 'fuse.js'
import styled from 'styled-components'

export const SCInput = styled.input`
    outline: none;
    height: 34px;
    color: #363636;
    padding: 0 1em;
    font-size: 13px;
    width: 100%;
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.1);
`

class EditorFuse extends React.Component {
    state = {
        search: ''
    }

    componentDidMount() {
        var options = {
            keys: ['name', 'tags'],
            minMatchCharLength: 2,
            shouldSort: true
        }

        this.fuse = new Fuse(this.props.data, options)
    }

    handleChange = e => {
        const inputText = e.currentTarget.value
        this.setState({ search: inputText }, () => {
            this.props.handleComplete(this.fuse.search(inputText))
        })
    }

    render() {
        return (
            <div>
                <SCInput
                    type="text"
                    onChange={this.handleChange}
                    placeholder="Search for a block"
                />
            </div>
        )
    }
}
export default EditorFuse
