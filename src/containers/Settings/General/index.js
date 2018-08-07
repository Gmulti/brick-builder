import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ConstructSettingsComponent from '../../../lib/settings/helpers/ConstructSettingsComponent'
import MjContainer from '../../../models/MjModels/MjContainer'
import TemplatingAction from '../../../reducers/Templating/actions'

const mapStateToProps = ({ Templating: { container } }) => ({
    container: _.assign(new MjContainer(), container, {
        type: MjContainer.type
    })
})

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                updateContainer: TemplatingAction.updateContainer
            },
            dispatch
        )
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class General extends Component {
    render() {
        const { container, actions } = this.props
        return (
            <Fragment>
                {ConstructSettingsComponent(container, {
                    actions: actions
                })}
            </Fragment>
        )
    }
}

export default General
