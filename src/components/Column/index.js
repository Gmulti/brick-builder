import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { assignIn, chain, isEmpty, isUndefined } from 'lodash'
import { connect } from 'react-redux'
import styled from 'styled-components'

import MjColumn from '../../models/MjModels/MjColumn'
import ConstructPreviewComponent from '../../factory/ConstructPreviewComponent'
import EmptyColumn from '../../lib/dnd/components/Drop/EmptyColumn'
import Empty from './Empty'

const SCLayoutColumn = styled.div`
    :hover {
        ::before {
            opacity: 1;
        }
    }
    ::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 10001;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        border: 1px dashed #eaeef0;
        transition: 0.2s opacity linear;
        pointer-events: none;
    }
`

const SCColumnAction = styled.div`
    position: absolute;
    width: 120px
    right: -130px;
    top: 0;
    z-index: 50;
    display: flex;
`

const mapStateToProps = (state, ownProps) => {
    const column = assignIn(new MjColumn(), ownProps.column)

    return {
        column: column,
        components: chain(state.Templating.components)
            .filter({
                keySection: ownProps.keySection,
                keyColumn: column.getKey()
            })
            .orderBy('order', 'asc')
            .value()
    }
}

@connect(mapStateToProps)
class Column extends Component {
    render() {
        const { column, components, keySection } = this.props

        return (
            <SCLayoutColumn style={column.getStylePreview()}>
                {isEmpty(components) || isUndefined(components) ? (
                    <EmptyColumn column={column}>
                        <Empty column={column} />
                    </EmptyColumn>
                ) : (
                    components.map((component, key) => {
                        return ConstructPreviewComponent(component, key)
                    })
                )}
            </SCLayoutColumn>
        )
    }
}

Column.propTypes = {
    components: PropTypes.array,
    keySection: PropTypes.number.isRequired,
    column: PropTypes.object.isRequired
}

export default Column
