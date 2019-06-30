import React, { Component } from 'react'
import { connect } from 'react-redux'
import { assignIn } from 'lodash'

import { previewComponent } from '../../../hoc/previewComponent'
import MjApiModel from '../../../models/MjModels/MjApi'

const mapStateToProps = (state, { component }) => ({
    component: assignIn(new MjApiModel(), component)
})

@connect(mapStateToProps)
@previewComponent()
class MjApi extends Component {
    render() {
        const { getIndex } = this.props

        return (
            <div id={getIndex()} dangerouslySetInnerHTML={{ __html: 'test' }} />
        )
    }
}

export default MjApi
