import React from 'react'
import styled from 'styled-components'

const SCButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border: none;
    background: none;
    outline: none;
    padding: 0;
    border-radius: 2px;
    cursor: ${props => (props.cursor ? props.cursor : 'pointer')};

    &:hover {
        background: ${props => props.theme.buttonBg};
        path {
            fill: ${props => props.theme.baseBlockColorHover};
        }
    }

    path {
        fill: ${props => props.theme.baseBlockColor};
    }

    & + & {
        margin-left: 4px;
    }
`

class BlockButton extends React.Component {
    render() {
        const { cursor = 'default', onClick = () => {} } = this.props

        return (
            <SCButton cursor={cursor} onClick={onClick}>
                {this.props.children}
            </SCButton>
        )
    }
}

export default BlockButton
