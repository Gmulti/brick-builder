import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { DND } from '../../../../lib'
import { TYPE_COLUMN } from '../../../../lib/components/models/constant'
import TemplatingAction from '../../../../reducers/Templating/actions'
import styled from 'styled-components'

const SCChoiceColumnLayout = styled.div`
    width: 20%;
    cursor: pointer;
    position: relative;
`

const SCChoiceColumn = styled.div`
    height: 60px;
    background: #eaeef0;
    border-radius: 4px;
    transition: background 0.2s ease-out;
    &:hover {
        background: #778f9b;
    }
`

const ChoiceColumnAfterBefore = SCChoiceColumn.extend`
    &::after,
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        z-index: 1;
        height: 60px;
        width: 2px;
        background: #fff;
    }
`

const SCChoiceColumnTwo = ChoiceColumnAfterBefore.extend`
    &::before {
        left: calc(50% - 1px);
    }
`

const SCChoiceColumnThree = ChoiceColumnAfterBefore.extend`
    &::before {
        left: 33.33333%;
    }
    &::after {
        left: 66.66667%;
    }
`

const SCChoiceColumnFour = ChoiceColumnAfterBefore.extend`
    &::before {
        left: calc(25% - 1px);
        width: 50%;
        background: 0 0;
        border-right: 2px solid #fff;
        border-left: 2px solid #fff;
    }
    &::after {
        left: calc(50% - 1px);
    }
`

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                addColumns: TemplatingAction.addColumns
            },
            dispatch
        )
    }
}

@connect(
    null,
    mapDispatchToProps
)
class ChoiceColumn extends Component {
    addColumns = () => {
        const { actions, section, nbColumn } = this.props

        let payload = []

        const _width = 100 / nbColumn

        for (let index = 1; index <= nbColumn; index++) {
            payload.push(
                DND.Helpers.Drop.Create.Column(section.getKey(), {
                    order: index,
                    type: TYPE_COLUMN,
                    attributes: {
                        width: {
                            type: '%',
                            value: _width
                        }
                    }
                })
            )
        }

        actions.addColumns(payload)
    }

    render() {
        const { nbColumn } = this.props

        let SCChoiceColumnDiv = SCChoiceColumn
        switch (nbColumn) {
            case 2:
                SCChoiceColumnDiv = SCChoiceColumnTwo
                break
            case 3:
                SCChoiceColumnDiv = SCChoiceColumnThree
                break
            case 4:
                SCChoiceColumnDiv = SCChoiceColumnFour
                break
        }

        return (
            <SCChoiceColumnLayout onClick={this.addColumns}>
                <SCChoiceColumnDiv />
            </SCChoiceColumnLayout>
        )
    }
}

ChoiceColumn.propTypes = {
    nbColumn: PropTypes.number.isRequired,
    section: PropTypes.object.isRequired
}

export default ChoiceColumn
