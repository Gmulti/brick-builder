import { concat } from 'lodash'
import React, { Component, Fragment } from 'react'
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
export class Components extends Component {
    render() {
        const { customComponents } = this.props

        return (
            <Fragment>
                <SCLayoutListComponents>
                    {DND.Helpers.createDNDComponents(
                        concat(ComponentsMjml, customComponents)
                    )}
                </SCLayoutListComponents>
                <SCLayoutListComponents>
                    {DND.Helpers.createDNDComponents(SectionsMjml)}
                </SCLayoutListComponents>
            </Fragment>
        )
    }
}

Components.propTypes = {}

export default Components
