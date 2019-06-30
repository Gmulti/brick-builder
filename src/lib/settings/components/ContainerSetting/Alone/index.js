import React, { Component } from 'react'
import styled from 'styled-components'
import { GROUP_NAME } from '../../Settings'

const SCLayoutSetting = styled.div`
    padding: 10px 20px;
    position: relative;
`

class Alone extends Component {
    render() {
        const { type } = this.props

        let SCLayout = SCLayoutSetting

        if (type === GROUP_NAME) {
            SCLayout = styled.div
        }

        return <SCLayout>{this.props.children}</SCLayout>
    }
}

export default Alone
