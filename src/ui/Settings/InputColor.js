import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

import { SketchPicker } from 'react-color'

const SCInputParent = styled.div`
    position: relative;
    display: inline-block;
`

const SCInputWrap = styled.div`
    display: inline-flex;
    align-items: center;
    height: 24px;
`

const SCColor = styled.span`
    height: 24px;
    width: 24px;
    border-radius: 3px 0 0 3px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 0;
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : '#FFF'};
`

const SCInput = styled.input`
    height: ${props => props.theme.inputSize};
    line-height: ${props => props.theme.inputSize};
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 0 3px 3px 0;
    width: 90px;
    color: #343434;
    font-weight: 400;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 0 4px;
`

const SCOverlay = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`

const SCCover = styled.div`
    position: absolute;
    z-index: 2;
    top: ${props => (props.positionY === 'top' ? '120%' : 'auto')};
    bottom: ${props => (props.positionY !== 'top' ? '120%' : 'auto')};
    right: ${props => (props.positionX !== 'left' ? '0' : 'auto')};
    left: ${props => (props.positionX === 'left' ? '0' : 'auto')};
`

class InputColor extends React.Component {
    state = {
        displayColorPicker: false,
        positionX: 'left',
        positionY: 'top',
        color: {
            hex: '#E2E2E2'
        }
    }

    inputColorRef = React.createRef()

    componentDidMount() {
        const inputPlacement = this.inputColorRef.current.getBoundingClientRect()

        const positionX = inputPlacement.left > 240 ? 'right' : 'left'
        const positionY = inputPlacement.top > 300 ? 'bottom' : 'top'

        this.setState({ positionX, positionY, color: this.props.color })
    }

    handleOpen = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    }

    handleChange = color => {
        this.setState({ color: color })
        this.props.handleChange(color)
    }

    handleChangeComplete = color => {
        this.props.handleChangeComplete(color)
    }

    getIndex() {
        const { component, styleKey } = this.props
        if (!!component) {
            return `color-${styleKey}-${component.getIndex()}`
        }

        return `color-selector`
    }

    render() {
        const { displayColorPicker, positionX, positionY } = this.state

        const { color } = this.state

        const colorInput = color.hex

        return (
            <SCInputParent>
                <SCInputWrap
                    onClick={this.handleOpen}
                    onFocus={this.handleOpen}
                    innerRef={this.inputColorRef}
                >
                    <SCColor
                        id={this.getIndex()}
                        backgroundColor={colorInput}
                    />
                    <SCInput value={colorInput} readOnly />
                </SCInputWrap>
                {displayColorPicker && (
                    <SCCover positionX={positionX} positionY={positionY}>
                        <SCOverlay onClick={this.handleClose} />
                        <SketchPicker
                            disableAlpha={true}
                            color={color}
                            onChange={this.handleChange}
                            onChangeComplete={this.handleChangeComplete}
                        />
                    </SCCover>
                )}
            </SCInputParent>
        )
    }
}

InputColor.defaultProps = {
    color: {
        hex: '#E2E2E2'
    }
}

InputColor.propTypes = {
    handleChangeComplete: propTypes.func.isRequired,
    handleChange: propTypes.func.isRequired
}

export default InputColor
