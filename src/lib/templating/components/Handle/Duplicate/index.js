import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isUndefined } from 'lodash'
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

@connect(
    null,
    mapDispatchToProps
)
class HandleDuplicate extends Component {
    _handleClick = e => {
        const { actions, component } = this.props

        // Section
        if (
            isUndefined(component.keySection) &&
            isUndefined(component.keyColumn)
        ) {
            actions.duplicateSection(component)
            return
        }

        // Column
        if (isUndefined(component.keyColumn)) {
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
