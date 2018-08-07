import React from 'react'
import styled from 'styled-components'

import Arrow from '../svg/arrow'

const SCBlockTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #555d65;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 34px;
    padding: 0 1rem;
    cursor: pointer;
    border-bottom: 1px solid #f2f2f2;
`

const SCBlockContent = styled.div`
    border-bottom: 1px solid #f2f2f2;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`

class Block extends React.Component {
    static defaultProps = {
        isOpen: true
    }
    state = {
        isOpen: this.props.isOpen
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        const { title = '', children } = this.props
        const { isOpen } = this.state
        return (
            <div>
                {title.length > 0 && (
                    <SCBlockTitle onClick={this.handleClick}>
                        {title} <Arrow direction={isOpen ? '' : 'down'} />
                    </SCBlockTitle>
                )}

                {isOpen && <SCBlockContent>{children}</SCBlockContent>}
            </div>
        )
    }
}
export default Block
