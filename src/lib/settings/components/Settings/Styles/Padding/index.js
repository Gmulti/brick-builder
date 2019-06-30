import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isUndefined, each } from 'lodash'
import styled from 'styled-components'

const SCCells = styled.div`
    display: flex;
    width: 100%;
`

const SCCell = styled.div`
    text-align: center;
    position: relative;
    input {
        border-radius: 0px;
        border-right: 0px;
    }
    &:first-child input {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    &:last-child input {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-right: 2px solid #eaeef0;
    }
`

const SCLabelCell = styled.label`
    display: block;
    font-size: 0.75em;
    color: #778f9b;
    line-height: 1;
    text-transform: uppercase;
    margin-top: 2px;
    opacity: 0.4;
    transition: opacity 0.12s linear 0.1s;
`

const SCInputDefault = styled.input`
    margin: 0;
    border: 2px solid #eaeef0;
    width: 100%;
    box-shadow: none;
    text-align: right;
    padding-right: 6px;
    height: 30px;
    background-color: #fff;
    outline: 0;
    font-size: 12px;
    color: #778f9b;
    font-weight: 500;
    transition: 50ms border-color ease-in-out;
    flex: 1;
    border-radius: 4px;
`

class Padding extends Component {
    defaultPaddingLeft = {
        type: 'px',
        value: 0
    }

    defaultPaddingRight = {
        type: 'px',
        value: 0
    }

    defaultPaddingTop = {
        type: 'px',
        value: 0
    }

    defaultPaddingBottom = {
        type: 'px',
        value: 0
    }

    _handleChange = e => {
        const { actions, component } = this.props

        let _newComponent = {
            ...this.props.component,
            attributes: {
                ...this.props.component.componentAttributes,
                [e.target.name]: {
                    ...this.props.component.componentAttributes[e.target.name],
                    value: Number(e.target.value)
                }
            }
        }

        if (isUndefined(_newComponent.attributes[e.target.name].type)) {
            _newComponent.attributes[e.target.name].type = 'px'
        }

        // Section
        if (
            isUndefined(component.keySection) &&
            isUndefined(component.keyColumn)
        ) {
            actions.updateSection(_newComponent)
            return
        }

        // Column
        if (isUndefined(component.keyColumn)) {
            actions.updateColumn(_newComponent)
            return
        }

        actions.updateComponent(_newComponent)
    }

    render() {
        const { component } = this.props

        const _paddings = {
            'padding-left': {
                object:
                    component.componentAttributes['padding-left'] ||
                    this.defaultPaddingLeft,
                label: 'Left'
            },
            'padding-right': {
                object:
                    component.componentAttributes['padding-right'] ||
                    this.defaultPaddingRight,
                label: 'Right'
            },
            'padding-top': {
                object:
                    component.componentAttributes['padding-top'] ||
                    this.defaultPaddingTop,
                label: 'Top'
            },
            'padding-bottom': {
                object:
                    component.componentAttributes['padding-bottom'] ||
                    this.defaultPaddingBottom,
                label: 'Bottom'
            }
        }

        let _paddingsView = []

        each(_paddings, (obj, key) => {
            _paddingsView.push(
                <SCCell key={key}>
                    <SCInputDefault
                        name={key}
                        type="number"
                        min={0}
                        value={obj.object.value}
                        onChange={this._handleChange}
                    />
                    <SCLabelCell>{obj.label}</SCLabelCell>
                </SCCell>
            )
        })

        return <SCCells>{_paddingsView}</SCCells>
    }
}

Padding.propTypes = {
    component: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

export default Padding
