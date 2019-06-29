import React, { Component, Fragment } from 'react'
import { isUndefined } from 'lodash'
import styled from 'styled-components'

const SCLayout = styled.div`
    padding: 8px;
    color: #fff;
    font-size: 14px;
    margin: 0 2px;
    background-color: ${({ backgroundColor }) =>
        !isUndefined(backgroundColor) ? backgroundColor : '#32373c'};
    border-radius: 5px;
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
