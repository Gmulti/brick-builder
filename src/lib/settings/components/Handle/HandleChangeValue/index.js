import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withHandleSelector } from '../../../hoc/withHandleSelector'
import handleUpdate from '../handleUpdate'

@withHandleSelector()
class HandleChangeValue extends Component {
    _handleChange = e => {
        const { getStyleKey, actions } = this.props
        const value = e.target && e.target.value ? e.target.value : e

        let _newComponent = {
            ...this.props.component,
            attributes: {
                ...this.props.component.getAttributes(),
                [getStyleKey()]: value
            }
        }

        handleUpdate(_newComponent, actions)
    }

    getChildProps = () => {
        return {
            ...this.props,
            handleChange: this._handleChange
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

HandleChangeValue.propTypes = {
    component: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    styleKey: PropTypes.string.isRequired
}

export default HandleChangeValue
