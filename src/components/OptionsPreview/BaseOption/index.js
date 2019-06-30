import React, { Component } from 'react'
import { isUndefined } from 'lodash'
import styled from 'styled-components'

const SCLayout = styled.div`
    padding: ${({ padding }) => (!isUndefined(padding) ? padding : '8px')};
    color: #fff;
    font-size: ${({ fontSize }) =>
        !isUndefined(fontSize) ? fontSize : '14px'};
    margin: 0 2px;
    background-color: ${({ backgroundColor }) =>
        !isUndefined(backgroundColor) ? backgroundColor : '#32373c'};
    border-radius: ${({ borderRadius }) =>
        !isUndefined(borderRadius) ? borderRadius : '5px'};
    :hover {
        cursor: pointer;
    }
`

export class BaseOption extends Component {
    render() {
        return <SCLayout {...this.props.style}>{this.props.children}</SCLayout>
    }
}

export default BaseOption
