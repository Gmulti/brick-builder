import React, { Component } from 'react'
import PropTypes from 'prop-types'

import EditorInserterGridItem from '../../../ui/EditorInserter/EditorInserterGridItem'

export class MjCreateComponent extends Component {
    get block() {
        return {
            ...this.props
        }
    }

    render() {
        return <EditorInserterGridItem block={this.block} />
    }
}

export default MjCreateComponent
