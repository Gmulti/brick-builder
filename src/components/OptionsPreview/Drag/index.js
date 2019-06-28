import React, { Component, Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faArrowsAlt from '@fortawesome/fontawesome-free-solid/faArrowsAlt'

import BaseOption from '../BaseOption'

class Drag extends Component {
    render() {
        return (
            <BaseOption>
                <FontAwesomeIcon icon={faArrowsAlt} />
            </BaseOption>
        )
    }
}

export default Drag
