import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentsMjml from '../CreateMjml'
import { DND } from '../../lib'
import EditorToggle from '../../ui/EditorInserter/EditorToggle'
import EditorInserter from '../../ui/EditorInserter'

export class AddComponentsOnColumn extends Component {
    render() {
        const { column } = this.props

        return (
            <>
                <EditorToggle>
                    <EditorInserter>
                        {DND.Helpers.createDNDComponents(
                            ComponentsMjml,
                            false,
                            {
                                keySection: column.keySection,
                                keyColumn: column.key
                            }
                        )}
                    </EditorInserter>
                </EditorToggle>
            </>
        )
    }
}

AddComponentsOnColumn.propTypes = {
    column: PropTypes.object.isRequired
}

export default AddComponentsOnColumn
