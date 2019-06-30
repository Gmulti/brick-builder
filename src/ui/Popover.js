import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const SCPopover = styled.div`
    background: #ffffff;
    border: 1px solid #e0e5e9;
    border-radius: 3px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    max-width: ${props => (props.width ? props.width : '350px')};
    width: calc(100vw - 24px);
    min-height: ${props => (props.width ? props.width : '240px')};
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    transform: ${props =>
        props.positionY === 'top' ? 'translateY(10px)' : 'translateY(0px)'};

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: ${props =>
            props.positionY === 'top' ? 'transparent' : '#FFF'};
        border-bottom-color: ${props =>
            props.positionY === 'top' ? '#e0e5e9' : 'transparent'};
        z-index: 3;
        bottom: ${props => (props.positionY === 'top' ? 'auto' : '-20px')};
        top: ${props => (props.positionY === 'top' ? '-20px' : 'auto')};
        left: ${props => (props.positionX === 'right' ? 'auto' : '7px')};
        right: ${props => (props.positionX === 'right' ? '7px' : 'auto')};
    }

    &:after {
        z-index: 2;
        border-top-color: ${props =>
            props.positionY === 'top' ? 'transparent' : '#E0E5E9'};
        border-bottom-color: ${props =>
            props.positionY === 'top' ? '#E0E5E9' : 'transparent'};
        bottom: ${props => (props.positionY === 'top' ? 'auto' : '-20px')};
        top: ${props => (props.positionY === 'top' ? '-20px' : 'auto')};
    }
`

const SCPopoverOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`

const Popover = props => {
    const customProps = { ...props }
    if (props.position) {
        const positionSplit = props.position.split('-')
        customProps.positionY = positionSplit[0]
        customProps.positionX = positionSplit[1]
    }
    return (
        <>
            <SCPopover {...customProps} />
            <SCPopoverOverlay onClick={props.actionHide} />
        </>
    )
}

export default Popover

Popover.propTypes = {
    position: propTypes.string,
    height: propTypes.number,
    width: propTypes.number,
    actionHide: propTypes.func
}
