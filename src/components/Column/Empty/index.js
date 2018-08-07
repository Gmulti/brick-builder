import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import classname from 'classnames'
import styled from 'styled-components'

import AddComponentsOnColumn from '../../AddComponentsOnColumn'

const SCEmptyColumn = styled.div`
    text- align: center;
`

export class ColumnEmpty extends Component {
    render() {
        return (
            <SCEmptyColumn>
                <AddComponentsOnColumn column={this.props.column} />
            </SCEmptyColumn>
        )
    }
}

ColumnEmpty.propTypes = {
    column: PropTypes.object.isRequired
}

export default ColumnEmpty
