import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { TABS_SETTINGS } from '../../../constants/Tabs'
import AppActions from '../../../reducers/App/actions'

function mapDispatchToProps(dispatch) {
    const _actions = new AppActions()
    return {
        actions: bindActionCreators(
            {
                changeComponentSettings: _actions.changeComponentSettings,
                changeActiveTabs: _actions.changeActiveTabs
            },
            dispatch
        )
    }
}

@connect(
    null,
    mapDispatchToProps
)
class ButtonSettings extends Component {
    _handleClick = e => {
        const { actions, component } = this.props

        actions.changeComponentSettings(component).then(() => {
            actions.changeActiveTabs(TABS_SETTINGS)
        })
    }

    render() {
        return <div onClick={this._handleClick}>{this.props.children}</div>
    }
}

ButtonSettings.propTypes = {
    component: PropTypes.object.isRequired
}

export default ButtonSettings
