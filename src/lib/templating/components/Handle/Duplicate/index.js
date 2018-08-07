import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import { bindActionCreators } from 'redux'

import TemplatingAction from '../../../reducers/Templating/actions'

const _actions = new TemplatingAction()
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            duplicateSection: _actions.duplicateSection,
            duplicateColumn: _actions.duplicateColumn,
            duplicateComponent: _actions.duplicateComponent
        },
        dispatch
    )
})

@connect(null, mapDispatchToProps)
export class HandleDuplicate extends Component {
    _handleClick = e => {
        const { actions, component } = this.props

        // Section
        if (
            _.isUndefined(component.keySection) &&
            _.isUndefined(component.keyColumn)
        ) {
            actions.duplicateSection(component)
            return
        }

        // Column
        if (_.isUndefined(component.keyColumn)) {
            actions.duplicateColumn(component)
            return
        }

        return actions.duplicateComponent(component)
    }

    render() {
        return <div onClick={this._handleClick}>{this.props.children}</div>
    }
}

HandleDuplicate.propTypes = {
    component: PropTypes.object.isRequired
}

export default HandleDuplicate
