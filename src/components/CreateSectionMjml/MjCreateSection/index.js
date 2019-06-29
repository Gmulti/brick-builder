import React, { Component } from 'react'

import EditorInserterGridItem from '../../../ui/EditorInserter/EditorInserterGridItem'

export class MjCreateSection extends Component {
    get block() {
        return {
            ...this.props
        }
    }
    render() {
        return <EditorInserterGridItem block={this.block} />
    }
}

MjCreateSection.propTypes = {}

export default MjCreateSection
