import React from 'react'
import styled from 'styled-components'

import ParagraphSvg from '../svg/paragraph'
import EditorFuse from './EditorFuse'

const SCInserterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 12px;
    height: 100%;
    padding: 10px;
    flex: 1;
    text-align: center;
`

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

class EditorInserter extends React.Component {
    // state = {
    //     blocks: blocks,
    //     searchedBlocks: []
    // }

    // updateBlocks = searchedBlocks => {
    //     this.setState({ searchedBlocks })
    // }

    render() {
        const { children } = this.props
        // const { blocks, searchedBlocks } = this.state
        // const renderedBlocks =
        // searchedBlocks.length > 0 ? searchedBlocks : blocks
        return (
            <div>
                {React.Children.map(children, (child, i) => {
                    if (child.type.name !== 'EditorFuse') {
                        return
                    }

                    return child
                })}
                {/* <EditorFuse data={blocks} handleComplete={this.updateBlocks} /> */}
                <SCInserterGrid>
                    {React.Children.map(children, (child, i) => {
                        if (child.type.name === 'EditorFuse') {
                            return
                        }

                        return child
                    })}
                    {/* {renderedBlocks.length > 0 ? (
                        renderedBlocks.map((block, i) => {
                            return (
                                <SCInserterGridItem key={i}>
                                    <ParagraphSvg />
                                    <span>{block.name}</span>
                                </SCInserterGridItem>
                            )
                        })
                    ) : (
                        <span>There is no result for your search</span>
                    )} */}
                </SCInserterGrid>
            </div>
        )
    }
}
export default EditorInserter
