import React, { Component } from 'react'
import { assign } from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ConstructSettingsComponent from '../../../lib/settings/helpers/ConstructSettingsComponent'
import MjContainer from '../../../models/MjModels/MjContainer'
import TemplatingAction from '../../../reducers/Templating/actions'

const mapStateToProps = ({ Templating: { container } }) => ({
    container: assign(new MjContainer(), container, {
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

@connect(
    mapStateToProps,
    mapDispatchToProps
)
class General extends Component {
    render() {
        const { container, actions } = this.props
        return (
            <>
                {ConstructSettingsComponent(container, {
                    actions: actions
                })}
            </>
        )
    }
}

export default General
