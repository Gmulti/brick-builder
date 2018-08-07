import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SCField = styled.div`
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0;
    line-height: 120%;
    user-select: none;
`

const SCFieldLabel = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #797979;
    margin: 0 0.6rem;
    font-size: 1.4rem;
    line-height: 1.2;
`

const SCFieldAction = styled.div`
    margin-right: 0.6rem;
`

const Field = ({ label, children }) => {
    return (
        <SCField>
            <SCFieldLabel>{label}</SCFieldLabel>
            <SCFieldAction>{children}</SCFieldAction>
        </SCField>
    )
}

export default Field
