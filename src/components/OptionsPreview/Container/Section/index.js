import React, { Component } from 'react'

import classnames from 'classnames'
import styled from 'styled-components'

const SCLayoutOption = styled.div`
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
    position: relative;

    :hover {
        .options {
            display: flex;
        }
    }
`

export class OptionsPreviewSection extends Component {
    render() {
        return <SCLayoutOption>{this.props.children}</SCLayoutOption>
    }
}

export default OptionsPreviewSection
