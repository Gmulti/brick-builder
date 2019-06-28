import React from 'react'
import styled from 'styled-components'

import EditorToggle from '../EditorInserter/EditorToggle'

import {
    SCButton as Button,
    SCButtonIcon as ButtonIcon,
    SCButtonPrimary as ButtonPrimary
} from '../Buttons'
import Plus from '../svg/plus'
import Check from '../svg/check'

const SCToolbarWrap = styled.div`
    display: flex;
    align-items: center;
    padding: ${props => `${props.theme.pdsm} ${props.theme.pdmd}`};
    height: ${props => props.theme.toolbarHeight};
    border-bottom: 1px solid ${props => props.theme.toolbarBdColor};
`

const SCToolbarTools = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
`

const SCToolbarAction = styled.div`
    display: flex;
    align-items: center;
`

class Toolbar extends React.Component {
    render() {
        const { onClickPreview, onClickDone } = this.props
        return (
            <SCToolbarWrap>
                <SCToolbarTools>
                    {/* <ButtonIcon>
                        <Plus fill="rgb(80, 95, 121)" width="12" height="12" />
                    </ButtonIcon> */}
                    {/* <EditorToggle /> */}
                </SCToolbarTools>
                <SCToolbarAction>
                    {!!onClickPreview && (
                        <Button onClick={onClickPreview}>Preview</Button>
                    )}
                    {!!onClickDone && (
                        <ButtonPrimary>
                            <Check />
                            <span>Done</span>
                        </ButtonPrimary>
                    )}
                </SCToolbarAction>
            </SCToolbarWrap>
        )
    }
}
export default Toolbar
