import React, { Component } from 'react'
import { isFunction, isArray, isString, isUndefined } from 'lodash'

export const withHandleSelector = ComposedComponent => {
    return ComposedComponent =>
        class extends Component {
            getStyleKey = () => {
                const { styleKey } = this.props

                if (!isUndefined(styleKey)) {
                    return styleKey
                }

                throw 'Need to setup a styleKey'
            }

            getStyleKeyJS = () => {
                const { styleKeyJS } = this.props

                if (!isUndefined(styleKeyJS)) {
                    return styleKeyJS
                }

                throw 'Need to setup a styleKeyJS'
            }

            constructSelector = () => {
                const { component, handleChangeSelector } = this.props

                if (isUndefined(handleChangeSelector)) {
                    // Default selector, only with index
                    this.selector = document.querySelector(
                        `#${component.getIndex()}`
                    )
                } else if (isString(handleChangeSelector)) {
                    // Improve selector with a string
                    this.selector = document.querySelector(
                        `#${component.getIndex()} ${handleChangeSelector}`
                    )
                } else if (isFunction(handleChangeSelector)) {
                    // Personalize your selector with a callback
                    this.selector = handleChangeSelector(component.getIndex())
                }
            }

            _updateValueSelector = value => {
                const { handleChangeSelectorActive = true } = this.props

                if (handleChangeSelectorActive) {
                    if (isArray(this.selector)) {
                        this.selector.forEach(obj => {
                            obj.style[this.getStyleKeyJS()] = value
                        })
                    } else {
                        this.selector.style[this.getStyleKeyJS()] = value
                    }
                }
            }

            componentWillMount() {
                this.constructSelector()
            }

            componentWillUpdate() {
                this.constructSelector()
            }

            getProps() {
                return {
                    ...this.props,
                    selector: this.selector,
                    updateValueSelector: this._updateValueSelector,
                    getStyleKeyJS: this.getStyleKeyJS,
                    getStyleKey: this.getStyleKey
                }
            }

            render() {
                return <ComposedComponent {...this.getProps()} />
            }
        }
}
