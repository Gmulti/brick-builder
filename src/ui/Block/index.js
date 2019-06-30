import React from 'react'
import styled from 'styled-components'

const SCBlockWrap = styled.div`
    display: flex;
    position: relative;
    margin: 0px auto;
    width: 100%;
    max-width: ${({ maxContainer }) =>
        !!!maxContainer ? '800px' : maxContainer};
`

const SCBlockSelected = styled.div`
    position: absolute;
    pointer-events: none;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(78, 188, 221, 0.18);
    z-index: 82;
    opacity: 1;
`

const SCBlockAction = styled.div`
    display: flex;
    margin: 5px 0px;
`

// const SCButton = styled.button`
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     width: 22px;
//     height: 22px;
//     border: none;
//     background: none;
//     outline: none;
//     padding: 0;
//     border-radius: 2px;
//     cursor: ${props => (props.cursor ? props.cursor : 'pointer')};

//     &:hover {
//         background: ${props => props.theme.buttonBg};
//         path {
//             fill: ${props => props.theme.baseBlockColorHover};
//         }
//     }

//     path {
//         fill: ${props => props.theme.baseBlockColor};
//     }

//     & + & {
//         margin-left: 4px;
//     }
// `

const SCBlockMore = styled.div`
    display: flex;
    position: relative;
    margin: 5px 0px;
`

const SCBlockContent = styled.div`
    display: block;
    position: relative;
    margin: 0 5px;
    padding: 0;
    flex: 1;

    &.visibleLines:before,
    &.visibleLines:after {
        visibility: visible;
    }

    &:hover {
        &:before,
        &:after {
            background-color: ${props =>
                props.focused
                    ? props.theme.baseBlockColorFocus
                    : props.theme.baseBlockColor};
            transform: ${props =>
                props.focused ? 'scaleY(1.3)' : 'scaleY(1.1)'};
        }
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: ${props => props.theme.blockHeight};
        background-color: ${props =>
            props.focused
                ? props.theme.baseBlockColorFocus
                : props.theme.baseBlockColor};
        transform-origin: top center;
        transition: all 0.2s ease-out;
        transform: ${props => (props.focused ? 'scaleY(1.3)' : 'scaleY(1)')};
        visibility: hidden;
    }

    &:after {
        left: auto;
        right: 0;
    }
`

export class BlockAction extends React.Component {
    render() {
        return this.props.children
    }
}

export class BlockMore extends React.Component {
    render() {
        return this.props.children
    }
}

class Block extends React.Component {
    state = {
        focused: false,
        hovered: false
    }
    handleFocus = () => {
        this.setState({
            focused: true
        })
    }
    handleBlur = () => {
        this.setState({
            focused: false
        })
    }
    handleMouseEnter = () => {
        this.setState({
            hovered: true
        })
    }
    handleMouseLeave = () => {
        this.setState({
            hovered: false
        })
    }
    render() {
        const { hovered, focused } = this.state
        const { selected, newBlock, children, type = 'section' } = this.props
        const visible = hovered || focused || selected || newBlock
        return (
            <SCBlockWrap
                selected={this.props.selected}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                type={type}
            >
                <SCBlockAction
                    style={{ visibility: visible ? 'visible' : 'hidden' }}
                    type={type}
                >
                    {React.Children.map(children, child => {
                        if (child.type.name !== 'BlockAction') {
                            return
                        }

                        return child
                    })}
                </SCBlockAction>

                <SCBlockContent
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    focused={this.state.focused}
                    className={visible ? 'visibleLines' : null}
                    type={type}
                >
                    {React.Children.map(children, (child, i) => {
                        if (
                            child.type.name === 'BlockAction' ||
                            child.type.name === 'BlockMore'
                        ) {
                            return
                        }

                        return child
                    })}
                </SCBlockContent>

                <SCBlockMore
                    style={{ visibility: visible ? 'visible' : 'hidden' }}
                    type={type}
                >
                    {React.Children.map(children, child => {
                        if (child.type.name !== 'BlockMore') {
                            return
                        }

                        return child
                    })}
                </SCBlockMore>
                {selected && <SCBlockSelected type={type} />}
            </SCBlockWrap>
        )
    }
}

export default Block
