//import React from 'react'
import styled from 'styled-components'

export const SCPage = styled.div`
    display: grid;
    background: #f7f7f7;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 1fr 350px;
    grid-template-rows: ${props => props.theme.toolbarHeight} 1fr;
`

export const SCToolbar = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    background: #fff;
`

export const SCPreview = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
    background: #fff;
    overflow-y: scroll;
`

export const SCSetting = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    background: #fff;
    margin: 0px 2px;
    overflow-y: scroll;
`
