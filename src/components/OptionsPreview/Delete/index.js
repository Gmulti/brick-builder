import React, { Component, Fragment } from 'react'
import { Templating } from '../../../lib'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash'

import BaseOption from '../BaseOption'

class Delete extends Component {
    render() {
        return (
            <BaseOption>
                <FontAwesomeIcon icon={faTrash} />
            </BaseOption>
        )
    }
}

export default Delete
