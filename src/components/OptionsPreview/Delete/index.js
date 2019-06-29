import React, { Component, Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash'

import BaseOption from '../BaseOption'

class Delete extends Component {
    render() {
        return (
            <BaseOption style={this.props.style || {}}>
                <FontAwesomeIcon icon={faTrash} />
            </BaseOption>
        )
    }
}

export default Delete
