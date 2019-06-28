import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SCInserterGridItem = styled.button`
    background: #fff;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    padding: 12px;
    width: 90px;
    height: 90px;
    background: #fff;
    font-size: 1.4em;
    margin-bottom: 20px;
    svg {
        margin-bottom: 8px;
    }
    box-shadow: inset 0 0 0 1px #e2e4e7, inset 0 0 0 2px #fff,
        0 1px 1px rgba(25, 30, 35, 0.2);

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
                {typeof block.icon === 'string' && (
                    <FontAwesomeIcon icon={block.icon || 'coffee'} />
                )}
                {typeof block.icon !== 'string' && <block.icon />}
                <span>{block.name}</span>
            </SCInserterGridItem>
        )
    }
}
export default EditorInserterGridItem
