import React from 'react'
import styled from 'styled-components'

import { SCButtonIcon } from '../Buttons'
import Plus from '../svg/plus'
import Popover from '../Popover'
import EditorInserter from './index'

class EditorToggle extends React.Component {
    state = {
        isOpen: false
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { isOpen } = this.state
        return (
            <div>
                <SCButtonIcon onClick={this.handleClick}>
                    <Plus />
                </SCButtonIcon>
                {isOpen && (
                    <Popover position="top-left" actionHide={this.handleClick}>
                        {this.props.children}
                    </Popover>
                )}
            </div>
        )
    }
}
export default EditorToggle
