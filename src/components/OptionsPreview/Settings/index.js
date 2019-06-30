import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs'
import BaseOption from '../BaseOption'

class Settings extends Component {
    render() {
        return (
            <BaseOption style={this.props.style || {}}>
                <FontAwesomeIcon icon={faCogs} />
            </BaseOption>
        )
    }
}

export default Settings
