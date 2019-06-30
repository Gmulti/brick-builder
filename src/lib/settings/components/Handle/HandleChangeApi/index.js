import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { debounce, assignIn, isEmpty } from 'lodash'
import { fetchSelectOptionsApi } from '../../../../../reducers/App/actions/fetchSelectOptionsApi' // TODO : too dependency
import { updateValueSelectedApi } from '../../../../../reducers/App/actions/updateValueSelectedApi' // TODO : too dependency

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                fetchSelectOptionsApi: fetchSelectOptionsApi,
                updateValueSelectedApi: updateValueSelectedApi
            },
            dispatch
        )
    }
}

const mapStateToProps = ({ App: { valueSelectedApi, searchApiOptions } }) => {
    return { options: searchApiOptions, valueSelected: valueSelectedApi }
}

@connect(
    mapStateToProps,
    mapDispatchToProps
)
class HandleChangeApi extends Component {
    constructor(props) {
        super(props)

        this._handleDebounceSearchOption = debounce(
            value =>
                props.actions.fetchSelectOptionsApi(
                    assignIn(props.component, { searchValue: value })
                ),
            300,
            { leading: false, trailing: true }
        )
    }

    _handleInputChange = value => {
        if (!isEmpty(value)) {
            this._handleDebounceSearchOption(value)
        }

        return value
    }

    _handleChange = value => {
        const { actions } = this.props

        actions.updateValueSelectedApi(value)
    }

    getChildProps = () => {
        return {
            ...this.props,
            handleChange: this._handleChange,
            handleInputChange: this._handleInputChange
        }
    }

    render() {
        const { children } = this.props

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, this.getChildProps())
        )

        return <>{childrenWithProps}</>
    }
}

HandleChangeApi.propTypes = {
    component: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

export default HandleChangeApi
