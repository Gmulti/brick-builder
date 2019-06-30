import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { fetchAddComponentApi } from '../../../../../reducers/App/actions/fetchAddComponentApi'

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                fetchAddComponentApi: fetchAddComponentApi
            },
            dispatch
        )
    }
}

@connect(
    null,
    mapDispatchToProps
)
class ButtonImport extends Component {
    _handleClick = e => {
        const { actions, component } = this.props

        actions.fetchAddComponentApi(component)
    }

    render() {
        return <button onClick={this._handleClick}>Ajouter</button>
    }
}

ButtonImport.propTypes = {
    component: PropTypes.object.isRequired
}

export default ButtonImport
