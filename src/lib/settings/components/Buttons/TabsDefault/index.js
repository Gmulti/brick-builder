import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppActions from '../../../reducers/App/actions' // TODO : Too dependency

function mapStateToProps(state) {
    return {
        tabDefault: state.App.tabDefault
    }
}

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
    mapStateToProps,
    mapDispatchToProps
)
class TabsDefault extends Component {
    _handleClick = e => {
        const { actions, tab } = this.props
        actions.changeActiveTabs(tab.key)
    }

    render() {
        return (
            <div onClick={this._handleClick} className={this.props.className}>
                {this.props.tab.title}
            </div>
        )
    }
}

export default TabsDefault
