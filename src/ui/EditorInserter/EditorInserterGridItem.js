import React from 'react'
import styled from 'styled-components'

import ParagraphSvg from '../svg/paragraph'

const SCInserterGridItem = styled.button`
    background: #fff;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    user-select: none;
    padding: 8px 0;
    width: 100%;
    svg {
        margin-bottom: 8px;
    }

    &:hover {
        box-shadow: inset 0 0 0 1px #e2e4e7, inset 0 0 0 2px #fff,
            0 1px 1px rgba(25, 30, 35, 0.2);
    }

    &:active,
    &:focus {
        box-shadow: inset 0 0 0 1px #ccd0d4, inset 0 0 0 2px #fff;
        outline: none;
    }
`

class EditorInserterGridItem extends React.Component {
    render() {
        const { block } = this.props

        return (
            <SCInserterGridItem>
                <ParagraphSvg />
                <span>{block.name}</span>
            </SCInserterGridItem>
        )
    }
}
export default EditorInserterGridItem
