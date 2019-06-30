import { concat } from 'lodash'
import React, { Component } from 'react'
import { DND } from '../../../lib'
import { connect } from 'react-redux'
import ComponentsMjml from '../../../components/CreateMjml'
import SectionsMjml from '../../../components/CreateSectionMjml'
import styled from 'styled-components'

const SCLayoutListComponents = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 10px;
`

const mapStateToProps = ({ App: { customComponents } }) => ({
    customComponents
})

@connect(mapStateToProps)
class Components extends Component {
    render() {
        const { customComponents } = this.props

        return (
            <>
                <SCLayoutListComponents>
                    {DND.Helpers.createDNDComponents(
                        concat(ComponentsMjml, customComponents)
                    )}
                </SCLayoutListComponents>
                <SCLayoutListComponents>
                    {DND.Helpers.createDNDComponents(SectionsMjml)}
                </SCLayoutListComponents>
            </>
        )
    }
}

Components.propTypes = {}

export default Components
