import React, { Component } from 'react'
import { find, isEmpty } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FA from '@fortawesome/fontawesome-free-solid'
import styled from 'styled-components'

import Title from '../../Title'

const SCLineSetting = styled.div`
    display: flex;
`
const SCGroupBtn = styled.div`
    display: flex;
`

const SCLayoutGroupCell = styled.div`
    text-align: center;
    flex: 1;
    cursor: pointer;
    color: #778f9b;
    transition: 0.2s all ease - out;
    line-height: 42px;
`

const SCGroupRadio = styled.input`
    display: none;
    border-radius: 50%;
    margin-right: 4px;
    line-height: 10px;
    border: 1px solid #b4b9be;
    background: #fff;
    color: #555;
    clear: none;
    cursor: pointer;
    height: 16px;
    margin: -4px 4px 0 0;
    outline: 0;
    padding: 0 !important;
    text-align: center;
    vertical-align: middle;
    width: 16px;
    min-width: 16px;
    -webkit-appearance: none;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: 0.05s border-color ease-in-out;
    &:checked + label {
        position: relative;
        background: #54c4f7;
        color: #fff;
    }
`

const SCGroupLabel = styled.label`
    line-height: 30px;
    display: block;
    color: rgba(0, 0, 0, 0.6);
    background: #eaeef0;
    border-right: 2px solid #fff;
    padding: 0 8px;
    text-align: center;
    flex: 1;
    cursor: pointer;
    transition: 0.2s all ease-out;
`

class ButtonGroup extends Component {
    render() {
        const {
            component,
            buttons,
            title = '',
            getStyleKey,
            handleChange
        } = this.props

        const _value = component.getAttributes()[getStyleKey()]

        return (
            <SCLineSetting>
                {!isEmpty(title) && <Title title={title} />}
                <SCGroupBtn>
                    {buttons.map((btn, key) => {
                        return (
                            <SCLayoutGroupCell key={key}>
                                <SCGroupRadio
                                    type="radio"
                                    value={btn.value}
                                    id={btn.key}
                                    checked={btn.value === _value}
                                    onChange={handleChange}
                                />
                                <SCGroupLabel htmlFor={btn.key}>
                                    <FontAwesomeIcon
                                        icon={find(FA, {
                                            iconName: btn.nameIcon
                                        })}
                                    />
                                </SCGroupLabel>
                            </SCLayoutGroupCell>
                        )
                    })}
                </SCGroupBtn>
            </SCLineSetting>
        )
    }
}

export default ButtonGroup
