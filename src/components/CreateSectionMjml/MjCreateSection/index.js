import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import * as FA from '@fortawesome/fontawesome-free-solid/index.js'

import BaseCreateComponent from '../../CreateMjml/BaseCreateComponent'

export class MjCreateSection extends Component {
    render() {
        const { nbColumn } = this.props
        return <BaseCreateComponent>Column(s) : {nbColumn}</BaseCreateComponent>
    }
}

MjCreateSection.propTypes = {}

export default MjCreateSection
