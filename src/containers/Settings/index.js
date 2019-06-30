import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ConstructMjmlModels from '../../factory/ConstructMjmlModels'
import TemplatingAction from '../../reducers/Templating/actions'
import { Settings } from '../../lib'

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                updateComponent: TemplatingAction.updateComponent,
                updateSection: TemplatingAction.updateSection
            },
            dispatch
        )
    }
}

@connect(
    null,
    mapDispatchToProps
)
class SettingsContainer extends Component {
    render() {
        return (
            <>
                <Settings.Containers.Settings
                    ConstructModels={ConstructMjmlModels}
                    actions={this.props.actions}
                />
            </>
        )
    }
}

export default SettingsContainer
