import React from 'react'
import styled from 'styled-components'

import LeftSvg from '../svg/left'
import RightSvg from '../svg/right'
import CenterSvg from '../svg/center'
import JustifySvg from '../svg/justified'

const SCAlignGroup = styled.div`
    display: inline-flex;
    align-items: stretch;
    height: ${props => props.theme.inputSize};
    border-radius: 3px;
    overflow: hidden;
`

const SCAlign = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 5px;
    border: none;
    outline: none;
    background: ${props =>
        props.isChecked ? props.theme.segmentBgActive : props.theme.segmentBg};

    svg {
        width: 14px;
        height: 14px;
    }

    path {
        fill: ${props =>
            props.isChecked
                ? props.theme.segmentColorActive
                : props.theme.segmentColor};
    }
`

class Align extends React.Component {
    static defaultProps = {
        isDefaultChecked: null,
        direction: ['left', 'right', 'center', 'justify']
    }

    state = {
        isChecked: this.props.isDefaultChecked
    }

    getDirection = () => {
        const { direction, type } = this.props
        if (type === 'image') {
            return direction.filter(d => {
                if (d !== 'justify') return true
                return false
            })
        } else {
            return direction
        }
    }

    getSvgIcon = direction => {
        switch (direction) {
            case 'left':
                return <LeftSvg />
            case 'right':
                return <RightSvg />
            case 'center':
                return <CenterSvg />
            default:
                return <JustifySvg />
        }
    }

    renderAlignItem = () => {
        return this.getDirection().map(d => {
            return (
                <SCAlign
                    isChecked={d === this.state.isChecked}
                    key={'align-item-' + d}
                    id={d}
                    onClick={this.handleClick}
                >
                    {this.getSvgIcon(d)}
                </SCAlign>
            )
        })
    }

    handleClick = e => {
        const elId = e.currentTarget.getAttribute('id')
        this.setState({ isChecked: elId })
        this.props.onChange(elId)
    }

    render() {
        return <SCAlignGroup>{this.renderAlignItem()}</SCAlignGroup>
    }
}
export default Align
