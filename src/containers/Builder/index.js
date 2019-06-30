import React, { Component } from 'react'
import Preview from '../Preview'
import Header from '../Header'
import Settings from '../Settings'
import styled from 'styled-components'

const SCLayout = styled.div`
    display: flex;
    height: 100%;
`

const SCLayoutSettings = styled.div`
    border-left: 2px solid #e2e4e7;
    width: 25%;
    min-width: 340px;
`

const SCLayoutPreview = styled.div`
    flex: 3;
    width: 75%;
`

class Builder extends Component {
    render() {
        return (
            <>
                <Header />
                <SCLayout>
                    <SCLayoutPreview>
                        <Preview />
                    </SCLayoutPreview>
                    <SCLayoutSettings>
                        <Settings />
                    </SCLayoutSettings>
                </SCLayout>
                <style>
                    {`
                        html,
                        body {
                            width: 100%;
                            height: 100%;
                            margin: 0;
                            padding: 0;
                            font-family: -apple-system, BlinkMacSystemFont,
                                'Segoe UI', Helvetica, 'Apple Color Emoji',
                                Arial, sans-serif, 'Segoe UI Emoji',
                                'Segoe UI Symbol';
                            font-size: 10px;
                        }

                        *,
                        *:before,
                        *:after {
                            box-sizing: inherit;
                        }

                        body * {
                            box-sizing: border-box;
                            font-family: -apple-system, BlinkMacSystemFont,
                                'Segoe UI', Helvetica, 'Apple Color Emoji',
                                Arial, sans-serif, 'Segoe UI Emoji',
                                'Segoe UI Symbol';
                        }
                    `}
                </style>
            </>
        )
    }
}

export default Builder
