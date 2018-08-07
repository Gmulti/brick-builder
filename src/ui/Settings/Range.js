import React from 'react'
import styled from 'styled-components'

import { SCInput } from './Input'

const SCRangeWrap = styled.div`
    display: flex;
    align-items: center;
`

const Input = SCInput.extend`
    margin-left: 1em;
    width: 50px;
`

const SCRange = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;
    flex: 1;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        transition: 0.2s;
        background: rgba(9, 30, 66, 0.1);
        border-radius: 2px;
    }

    &::-webkit-slider-thumb {
        height: 14px;
        width: 14px;
        border-radius: 50%;
        background: #b9b9b9;
        cursor: pointer;
        -webkit-appearance: none;
        transform: translateY(-5px);
    }

    &:focus::-webkit-slider-thumb {
        box-shadow: inset 0 0 0 1px #b9b9b9, inset 0 0 0 2px #fff;
    }

    &::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        transition: 0.2s;
        background: rgba(9, 30, 66, 0.1);
        border-radius: 2px;
    }
    &::-moz-range-thumb {
        height: 14px;
        width: 14px;
        border-radius: 50%;
        background: #b9b9b9;
        cursor: pointer;
        -webkit-appearance: none;
        transform: translateY(-5px);
    }
`

class Range extends React.Component {
    render() {
        const {
            isText,
            typeObject = { type: 'px', value: 0 },
            handleChange = () => {},
            handleChangeType = () => {},
            minInput = 0,
            maxInput = null,
            typeAvailables = ['px', '%'],
            LogoText
        } = this.props

        return (
            <SCRangeWrap>
                {LogoText && <LogoText />}
                <SCRange
                    onChange={handleChange}
                    type="range"
                    value={typeObject.value}
                    min={minInput}
                    max={maxInput}
                />
                {LogoText && <LogoText size={23} />}
                <Input
                    min={minInput}
                    max={maxInput}
                    onChange={handleChange}
                    type="number"
                    value={typeObject.value}
                />
            </SCRangeWrap>
        )
    }
}

export default Range
