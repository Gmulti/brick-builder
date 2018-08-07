import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SCTitle = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    flex: 1;
    font-size: 12px;
    color: #778f9b;
`

class Title extends Component {
    render() {
        const { title } = this.props

        return <SCTitle>{title}</SCTitle>
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title
