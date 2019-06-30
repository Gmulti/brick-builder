import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ConstructSettingsComponent from '../../../helpers/ConstructSettingsComponent'

const SCEmptyBlockSelected = styled.p`
    display: block;
    font-size: 13px;
    background: #fff;
    padding: 32px 16px;
    border-bottom: 1px solid #e2e4e7;
    text-align: center;
`

export class SettingsComponent extends Component {
    render() {
        const { component, actions } = this.props

        if (!component) {
            return (
                <>
                    <SCEmptyBlockSelected>
                        No block selected
                    </SCEmptyBlockSelected>
                </>
            )
        }

        return (
            <>
                {ConstructSettingsComponent(component, {
                    actions: actions
                })}
            </>
        )
    }
}

SettingsComponent.propTypes = {
    actions: PropTypes.object.isRequired
}

export default SettingsComponent
