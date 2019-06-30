import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DND } from '../../../../index'

import TemplatingAction from '../../../reducers/Templating/actions'

function mapDispatchToProps(dispatch) {
    const _actions = new TemplatingAction()
    return {
        actions: bindActionCreators(
            {
                updateComponentPosition: _actions.updateComponentPosition,
                addComponent: _actions.addComponent
            },
            dispatch
        )
    }
}

@connect(
    null,
    mapDispatchToProps
)
class StaticComponent extends Component {
    _handleClickAddComponent = () => {
        const { keySection, keyColumn, params, actions } = this.props

        const payload = DND.Helpers.Drop.Create.Component(
            keySection,
            keyColumn,
            {
                order: 1,
                ...params
            }
        )

        actions.addComponent(payload)
    }

    render() {
        const { children } = this.props

        return <span onClick={this._handleClickAddComponent}>{children}</span>
    }
}

export default StaticComponent
