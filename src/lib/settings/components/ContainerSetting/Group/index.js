import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Group extends Component {
    render() {
        return <div>{this.props.children}</div>
    }
}

export default Group
