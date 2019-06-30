import React, { Component } from 'react'
import styled from 'styled-components'

const SCLayoutOption = styled.div`
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9999;
    background-color: #02a0d2;
    &:hover {
        display: flex;
    }
`

export class OptionsPreview extends Component {
    render() {
        return (
            <SCLayoutOption className="options__preview__container">
                {this.props.children}
            </SCLayoutOption>
        )
    }
}

export default OptionsPreview
