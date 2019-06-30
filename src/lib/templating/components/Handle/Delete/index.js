import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isUndefined } from 'lodash'
import { bindActionCreators } from 'redux'

import TemplatingAction from '../../../reducers/Templating/actions'

function mapDispatchToProps(dispatch) {
    const _actions = new TemplatingAction()
    return {
        actions: bindActionCreators(
            {
                deleteSection: _actions.deleteSection,
                deleteColumn: _actions.deleteColumn,
                deleteComponent: _actions.deleteComponent
            },
            dispatch
        )
    }
}

@connect(
    null,
    mapDispatchToProps
)
class HandleDelete extends Component {
    _handleClick = e => {
        const { actions, component } = this.props

        // Section
        if (
            isUndefined(component.keySection) &&
            isUndefined(component.keyColumn)
        ) {
            actions.deleteSection(component)
            return
        }

        // Column
        if (isUndefined(component.keyColumn)) {
            actions.deleteColumn(component)
            return
        }

        return actions.deleteComponent(component)
    }

    render() {
        return <div onClick={this._handleClick}>{this.props.children}</div>
    }
}

HandleDelete.propTypes = {
    component: PropTypes.object.isRequired
}

export default HandleDelete
