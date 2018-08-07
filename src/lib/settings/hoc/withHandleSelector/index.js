import React, { Component } from 'react'
import * as _ from 'lodash'

export const withHandleSelector = ComposedComponent => {
    return ComposedComponent =>
        class extends Component {
            getStyleKey = () => {
                const { styleKey } = this.props

                if (!_.isUndefined(styleKey)) {
                    return styleKey
                }

                throw 'Need to setup a styleKey'
            }

            getStyleKeyJS = () => {
                const { styleKeyJS } = this.props

                if (!_.isUndefined(styleKeyJS)) {
                    return styleKeyJS
                }

                throw 'Need to setup a styleKeyJS'
            }

            constructSelector = () => {
                const { component, handleChangeSelector } = this.props

                if (_.isUndefined(handleChangeSelector)) {
                    // Default selector, only with index
                    this.selector = document.querySelector(
                        `#${component.getIndex()}`
                    )
                } else if (_.isString(handleChangeSelector)) {
                    // Improve selector with a string
                    this.selector = document.querySelector(
                        `#${component.getIndex()} ${handleChangeSelector}`
                    )
                } else if (_.isFunction(handleChangeSelector)) {
                    // Personalize your selector with a callback
                    this.selector = handleChangeSelector(component.getIndex())
                }
            }

            _updateValueSelector = value => {
                const {
                    handleChangeSelector,
                    handleChangeSelectorActive = true,
                    selector,
                    component
                } = this.props

                if (handleChangeSelectorActive) {
                    if (_.isArray(this.selector)) {
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
