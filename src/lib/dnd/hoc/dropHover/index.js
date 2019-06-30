import React, { Component } from 'react'
import { isNull, isUndefined } from 'lodash'

export const dropHover = ComposedComponent => {
    return ComposedComponent =>
        class extends Component {
            state = {
                elementHover: null
            }

            componentWillReceiveProps(nextProps) {
                if (this.props.isElementOver && !nextProps.isElementOver) {
                    this.setState({ elementHover: null })
                }
            }

            setElementHover = elementHover => {
                if (elementHover !== this.state.elementHover) {
                    this.setState({ elementHover })
                }
            }

            getStylesHover = () => {
                const { elementHover } = this.state

                let _style = {}

                if (!isNull(elementHover) && !isUndefined(elementHover)) {
                    _style = {
                        opacity: 1,
                        height: '15px'
                    }
                }

                if (elementHover === 'before') {
                    _style = {
                        ..._style,
                        top: '-5px'
                    }
                } else if (elementHover === 'after') {
                    _style = {
                        ..._style,
                        bottom: '-5px'
                    }
                }

                return _style
            }

            getProps() {
                return {
                    ...this.props,
                    elementHover: this.state.elementHover,
                    setElementHover: this.setElementHover,
                    getStylesHover: this.getStylesHover
                }
            }

            render() {
                return <ComposedComponent {...this.getProps()} />
            }
        }
}
