import React, { Component } from 'react'
import styled from 'styled-components'

const SCLayoutCreateComponent = styled.div`
    border-radius: 5px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background: #fff;
    border: none;
    font-size: 1.4em;
    cursor: pointer;
    user-select: none;
    box-shadow: inset 0 0 0 1px #e2e4e7, inset 0 0 0 2px #fff,
        0 1px 1px rgba(25, 30, 35, 0.2);
    svg {
        margin-bottom: 8px;
    }
    &: active,
        &: focus {
        box-shadow: inset 0 0 0 1px #ccd0d4, inset 0 0 0 2px #fff;
        outline: none;
    }
`

export class BaseCreateComponent extends Component {
    render() {
        return (
            <SCLayoutCreateComponent>
                {this.props.children}
            </SCLayoutCreateComponent>
        )
    }
}

export default BaseCreateComponent
