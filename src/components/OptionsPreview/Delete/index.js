import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash'

import BaseOption from '../BaseOption'

function Delete(props) {
    return (
        <BaseOption style={props.style || {}}>
            <FontAwesomeIcon icon={faTrash} />
        </BaseOption>
    )
}

export default Delete
