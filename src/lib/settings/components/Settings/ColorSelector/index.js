import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BlockPicker, SketchPicker } from 'react-color'
import reactCSS from 'reactcss'

import styled from 'styled-components'

const SCColor = styled.div`
    cursor: pointer;
    width: 40px;
    height: 25px;
    border-radius: 2px;
    border: 2px solid #e2e2e2;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
`

const SCPopover = styled.div`
    position: absolute;
    z-index: 9999;
    top: 40px;
    right: 20px;
`

const SCCover = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`
class ColorSelector extends Component {
    state = {
        displayColorPicker: false
    }

    defaultColor = {
        rgb: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        },
        hex: '#000000'
    }

    defaultColorsNoStorage = [
        '#CCCCCC',
        '#333333',
        '#FF6900',
        '#7BDCB5',
        '#8ED1FC',
        '#FCB900',
        '#795548',
        '#FFFFFF',
        '#4D4D4D',
        '#000000',
        '#EB144C',
        '#00D084',
        '#0693E3',
        '#F78DA7',
        '#607D8B'
    ]

    _handleChange = color => {
        this.selector.style.background = color.hex
        this.props.handleChange(color)
    }

    _handleChangeComplete = color => {
        this.props.handleChangeComplete(color)
    }

    _handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
        document.addEventListener('keydown', this._handleKeyDown)
    }

    _handleClose = () => {
        document.removeEventListener('keydown', this._handleKeyDown)
        this.setState({ displayColorPicker: false })
    }

    _handleKeyDown = e => {
        if (e.charCode === 13 || e.keyCode === 13) {
            this._handleClose()
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleKeyDown)
    }

    componentWillMount() {
        this.constructSelector()
    }

    componentWillUpdate() {
        this.constructSelector()
    }

    constructSelector() {
        this.selector = document.querySelector(`#${this.getIndex()}`)
    }

    getIndex() {
        const { component, styleKeyJS } = this.props

        return `color-${styleKeyJS}-${component.getIndex()}`
    }

    render() {
        const { component } = this.props

        const color = this.props.color || this.defaultColor

        const stylesDynamic = reactCSS({
            default: {
                color: {
                    background: `rgba(${color.rgb.r}, ${color.rgb.g}, ${
                        color.rgb.b
                    }, ${color.rgb.a})`
                }
            }
        })

        let _picker = false
        switch (this.props.picker) {
            case 'block':
                _picker = (
                    <BlockPicker
                        color={color.hex}
                        onChange={this._handleChange}
                        onChangeComplete={this._handleChangeComplete}
                    />
                )
                break
            case 'sketch':
            default:
                _picker = (
                    <SketchPicker
                        presetColors={this.defaultColorsNoStorage}
                        color={color.rgb}
                        onChange={this._handleChange}
                        onChangeComplete={this._handleChangeComplete}
                    />
                )
                break
        }

        return (
            <>
                <SCColor
                    id={this.getIndex()}
                    style={stylesDynamic.color}
                    onClick={this._handleClick}
                />
                {this.state.displayColorPicker ? (
                    <SCPopover>
                        <SCCover onClick={this._handleClose} />
                        {_picker}
                    </SCPopover>
                ) : null}
            </>
        )
    }
}

ColorSelector.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleChangeComplete: PropTypes.func.isRequired,
    color: PropTypes.object
}

export default ColorSelector
