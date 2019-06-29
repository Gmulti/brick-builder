import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import styled from 'styled-components'

import AddComponentsOnColumn from '../../AddComponentsOnColumn'

const SCEmptyColumnContainer = styled.div`
    background-color: #fff;
    padding: 20px;
`
const SCEmptyColumn = styled.div`
    text-align: center;
    border: 1px dashed #1da592;
`

export class ColumnEmpty extends Component {
    render() {
        return (
            <SCEmptyColumnContainer>
                <SCEmptyColumn>
                    <AddComponentsOnColumn column={this.props.column} />
                </SCEmptyColumn>
            </SCEmptyColumnContainer>
        )
    }
}

ColumnEmpty.propTypes = {
    column: PropTypes.object.isRequired
}

export default ColumnEmpty
