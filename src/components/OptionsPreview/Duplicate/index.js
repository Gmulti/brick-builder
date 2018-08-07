import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCopy from '@fortawesome/fontawesome-free-solid/faCopy'
import BaseOption from '../BaseOption'

class Duplicate extends Component {
    render() {
        return (
            <BaseOption>
                <FontAwesomeIcon icon={faCopy} />
            </BaseOption>
        )
    }
}

export default Duplicate
