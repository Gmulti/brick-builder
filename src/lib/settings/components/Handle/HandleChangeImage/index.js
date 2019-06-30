import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isUndefined, isNull, debounce, isFunction } from 'lodash'

import { Helpers } from '../../../../../lib'
import { withHandleSelector } from '../../../hoc/withHandleSelector'
import handleUpdate from '../handleUpdate'

@withHandleSelector()
class HandleChangeImage extends Component {
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

    getWidthSelector() {
        const { widthSelector, component } = this.props

        if (isUndefined(widthSelector)) {
            throw 'Need setup a widthSelector'
        }

        if (isFunction(widthSelector)) {
            return widthSelector(component.getIndex())
        } else {
            throw 'Use a function for setup a widthSelector'
        }
    }

    getCleanOffsetWidthSelector() {
        const selector = this.getWidthSelector()
        return (
            selector.offsetWidth -
            parseInt(selector.style.paddingLeft || 0) -
            parseInt(selector.style.paddingRight || 0)
        )
    }

    initState(component) {
        const { getStyleKey, selector } = this.props

        const _typeObject = component.getAttributes()[getStyleKey()]
        const widthSelector = this.getWidthSelector()
        if (isNull(widthSelector)) {
            return
        }

        if (widthSelector.offsetWidth === 0) {
            return
        }

        if (isNull(_typeObject) || isUndefined(_typeObject)) {
            this.setState({ typeObject: { type: '%', value: 100 } })
            return
        }

        const _newTypeObject = {
            value: Math.round(
                (_typeObject.value * 100) / this.getCleanOffsetWidthSelector()
            ),
            type: '%'
        }

        this.setState({ typeObject: _newTypeObject })
    }

    componentWillReceiveProps(nextProps) {
        this.initState(nextProps.component)
    }

    componentWillMount() {
        this.initState(this.props.component)
    }

    _handleChange = e => {
        const { getStyleKey, component } = this.props

        let _newComponent = {
            ...this.props.component,
            attributes: {
                ...this.props.component.getAttributes(),
                [getStyleKey()]: {
                    type: 'px',
                    value: Math.round(
                        (e.target.value * this.getCleanOffsetWidthSelector()) /
                            100
                    )
                }
            }
        }

        const { updateValueSelector } = this.props

        const value = Helpers.transformTypeObject(
            _newComponent.attributes[getStyleKey()]
        )

        updateValueSelector(value)

        this.setState({
            typeObject: { value: Number(e.target.value), type: '%' }
        })

        this._handleChangeThrottle(_newComponent)
    }

    getChildProps = () => {
        return {
            ...this.props,
            handleChange: this._handleChange,
            handleChangeType: () => {},
            typeObject: this.state.typeObject
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

HandleChangeImage.propTypes = {
    component: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    styleKey: PropTypes.string.isRequired
}

export default HandleChangeImage
