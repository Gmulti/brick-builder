import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const SCGroupName = styled.div`
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    border-top: 1px solid #e2e4e7;
    border-bottom: 1px solid #e2e4e7;
`

class GroupName extends Component {
    render() {
        const { title } = this.props

        return <SCGroupName>{title}</SCGroupName>
    }
}

GroupName.propTypes = {
    title: PropTypes.string.isRequired
}

export default GroupName
