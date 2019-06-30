import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isUndefined } from 'lodash'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { bindActionCreators } from 'redux'
import { DND } from '../../../../index'

import styled from 'styled-components'

import { MOVE_SECTION, ADD_SECTION } from '../../../constants'
import TemplatingAction from '../../../reducers/Templating/actions'
import { dropHover } from '../../../hoc/dropHover'

const SCDropSection = styled.div`
    position: relative;
`

const SCDropSectionHoverElement = styled.div`
    opacity: 0;
    position: absolute;
    height: 0px;
    width: 100%;
    background: #d20202;
    z-index: 1000;
    transition: all 0.2s ease-in;
`

function mapDispatchToProps(dispatch) {
    const _actions = new TemplatingAction()
    return {
        actions: bindActionCreators(
            {
                updateSectionPosition: _actions.updateSectionPosition,
                addColumns: _actions.addColumns,
                addSection: _actions.addSection
            },
            dispatch
        )
    }
}

const cardDrop = {
    drop(props, monitor, component) {
        let newColumn, payload

        switch (monitor.getItemType()) {
            case ADD_SECTION:
                payload = DND.Helpers.Drop.Add.preparePayloadSection(
                    props,
                    monitor,
                    component
                )

                const {
                    createNbColumn,
                    typeColumn,
                    type
                } = monitor.getItem().params
                const newSection = DND.Helpers.Drop.Create.Section({
                    ...payload,
                    type
                })

                newColumn = []

                for (let i = 0; i < createNbColumn; i++) {
                    newColumn.push(
                        DND.Helpers.Drop.Create.Column(newSection.key, {
                            order: i + 1,
                            type: typeColumn,
                            attributes: {
                                width: {
                                    value: 100 / createNbColumn,
                                    type: '%'
                                }
                            }
                        })
                    )
                }

                props.actions.addSection(newSection).then(() => {
                    props.actions.addColumns(newColumn)
                })

                break
            case MOVE_SECTION:
                newColumn = DND.Helpers.Drop.Create.Column(props.section.key)
                payload = DND.Helpers.Drop.Move.preparePayloadSection(
                    props,
                    monitor,
                    component
                )
                if (isUndefined(payload)) {
                    return
                }

                props.actions.updateSectionPosition(payload)
                break
        }
    },
    hover(props, monitor, component) {
        if (
            !monitor.canDrop() ||
            (!!props.order && monitor.getItem().order === props.order)
        ) {
            return
        }

        const rawComponent = DND.Helpers.undecorate(component)

        rawComponent.setElementHover(
            DND.Helpers.getAfterOrBefore(monitor, component)
        )
    }
}

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isElementOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

@connect(
    null,
    mapDispatchToProps
)
@DropTarget([MOVE_SECTION, ADD_SECTION], cardDrop, collectDrop)
@dropHover()
class DropSection extends Component {
    render() {
        const { connectDropTarget, children, getStylesHover } = this.props

        const _style = getStylesHover()

        return connectDropTarget(
            <span>
                <SCDropSection>
                    {children}
                    <SCDropSectionHoverElement style={_style} />
                </SCDropSection>
            </span>
        )
    }
}

DropSection.propTypes = {
    section: PropTypes.object.isRequired
}

export default DropSection
