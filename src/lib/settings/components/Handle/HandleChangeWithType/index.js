import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isUndefined, debounce } from 'lodash'

import { Helpers } from '../../../../../lib'
import { withHandleSelector } from '../../../hoc/withHandleSelector'
import handleUpdate from '../handleUpdate'

@withHandleSelector()
class HandleChangeWithType extends Component {
    defaultTypeObject = {
        type: 'px',
        value: 0
    }

    constructor(props) {
        super(props)

        this._handleChangeThrottle = debounce(
            _newComponent => {
                handleUpdate(_newComponent, props.actions)
            },
            500,
            { leading: false, trailing: true }
        )
    }

    initState(component) {
        const { getStyleKey } = this.props

        const _typeObject =
            component.componentAttributes[getStyleKey()] ||
            this.getDefaultTypeObject()
        this.setState({ typeObject: _typeObject })
    }

    componentWillReceiveProps(nextProps) {
        this.initState(nextProps.component)
    }

    componentWillMount() {
        this.initState(this.props.component)
    }

    getDefaultTypeObject() {
        const { defaultTypeObject } = this.props

        if (!isUndefined(defaultTypeObject)) {
            return defaultTypeObject
        }

        if (!isUndefined(this.defaultTypeObject)) {
            return this.defaultTypeObject
        }

        throw 'Need to set up a defaultTypeObject'
    }

    _handleChange = e => {
        const { getStyleKey, getStyleKeyJS, defaultType = 'px' } = this.props

        const _value = e.target && e.target.value ? e.target.value : e

        let _newComponent = {
            ...this.props.component,
            attributes: {
                ...this.props.component.getAttributes(),
                [getStyleKey()]: {
                    ...this.props.component.getAttributes()[getStyleKey()],
                    value: Number(_value)
                }
            }
        }

        if (isUndefined(_newComponent.attributes[getStyleKey()].type)) {
            _newComponent.attributes[getStyleKey()].type = defaultType
        }

        const { updateValueSelector } = this.props

        const _styleChange = Helpers.transformTypeObject(
            _newComponent.attributes[getStyleKey()]
        )

        updateValueSelector(_styleChange)

        this.setState({ typeObject: _newComponent.attributes[getStyleKey()] })

        this._handleChangeThrottle(_newComponent)
    }

    _handleChangeType = e => {
        const { getStyleKey } = this.props

        let _newComponent = {
            ...this.props.component,
            styles: {
                ...this.props.component.getAttributes(),
                [getStyleKey()]: {
                    ...this.props.component.getAttributes()[getStyleKey()],
                    type: e.target.value
                }
            }
        }

        if (isUndefined(_newComponent.styles[getStyleKey()].value)) {
            _newComponent.styles[getStyleKey()].value = 0
        }

        this.props.actions.updateComponent(_newComponent)
    }

    getChildProps = () => {
        return {
            ...this.props,
            handleChange: this._handleChange,
            handleChangeType: this._handleChangeType,
            typeObject: this.state.typeObject,
            defaultTypeObject: this.getDefaultTypeObject()
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

HandleChangeWithType.propTypes = {
    component: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    styleKey: PropTypes.string.isRequired
}

export default HandleChangeWithType
