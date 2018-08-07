import React, { Component, Fragment } from 'react'

import classnames from 'classnames'
import styled from 'styled-components'

const SCLayoutOption = styled.div`
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9999;
    position: relative;

    :hover {
        .options {
            display: flex;
        }
    }
`

export class OptionsPreview extends Component {
    render() {
        return <SCLayoutOption>{this.props.children}</SCLayoutOption>
    }
}

export default OptionsPreview
