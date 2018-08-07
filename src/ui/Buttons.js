// import React from 'react'
import styled from 'styled-components'

export const SCButton = styled.button`
    font-size: 12px;
    padding: 0.66em 1em;
    color: ${props => props.theme.buttonTxt};
    font-weight: 600;
    border-radius: 0.3em;
    background: ${props => props.theme.buttonBg};
    outline: none;
    border: none;
    transition: background 0.1s ease-out,
        box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    display: inline-flex;
    align-items: center;

    span:first-child {
        margin: 0 0.3em 0 0;
    }
    span:last-child {
        margin: 0 0 0 0.3em;
    }

    & + button {
        margin-left: 1em;
    }

    &:not(:disabled):not(:active):hover {
        background: ${props => props.theme.buttonBgHover};
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06);
    }

    &:active {
        background: ${props => props.theme.buttonBgActive};
        box-shadow: none;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export const SCButtonPrimary = SCButton.extend`
    background: ${props => props.theme.buttonBgPrimary};
    color: ${props => props.theme.buttonTxtPrimary};

    &:not(:disabled):not(:active):hover {
        background: ${props => props.theme.buttonBgPrimaryHover};
    }

    &:active {
        background: ${props => props.theme.buttonBgPrimaryActive};
    }
`

export const SCButtonIcon = SCButton.extend`
    font-size: 10px;
    width: 2.8em;
    height: 2.8em;
    padding: 0;
    justify-content: center;
    background: none;
`
