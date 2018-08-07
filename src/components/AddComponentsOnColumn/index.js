import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import classname from 'classnames'

import styled from 'styled-components'
import ComponentsMjml from '../CreateMjml'
import { DND } from '../../lib'
import EditorToggle from '../../ui/EditorInserter/EditorToggle'
import EditorInserter from '../../ui/EditorInserter'

export class AddComponentsOnColumn extends Component {
    render() {
        const { column } = this.props

        return (
            <Fragment>
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
            </Fragment>
        )
    }
}

AddComponentsOnColumn.propTypes = {
    column: PropTypes.object.isRequired
}

export default AddComponentsOnColumn
