import React from 'react'
import { find, isUndefined, isNull } from 'lodash'
import { DragSource } from 'react-dnd'
import { connect } from 'react-redux'

import MjmlPreview from '../../components/MjmlPreview/constant'
import OptionsPreviewContainer from '../../components/OptionsPreview/Container/Component'
import OptionDrag from '../../components/OptionsPreview/Drag'
import OptionSettings from '../../components/OptionsPreview/Settings'
import OptionDelete from '../../components/OptionsPreview/Delete'
import ConstructMjmlModels from '../../factory/ConstructMjmlModels'
import OptionDuplicate from '../../components/OptionsPreview/Duplicate'
import { DND, Settings, Templating } from '../../lib'
import styled from 'styled-components'

const SCLayout = styled.div`
    position: relative;
    border: 2px solid ${({ isActive }) =>
        isActive ? '#02a0d2' : 'transparent'}
    

    :hover {
        border-color:#02a0d2;
        .options__preview__container {
            display: flex;
        }
    }
`

const cardDrag = {
    beginDrag(props) {
        return {
            keySection: props.keySection,
            keyColumn: props.keyColumn,
            order: props.order
        }
    }
}

function collectDrag(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

const mapStateToProps = (state, ownProps) => {
    const _componentSettings = isNull(state.App.componentSettings)
        ? null
        : ConstructMjmlModels(state.App.componentSettings)
    return {
        component: ConstructMjmlModels(ownProps.component),
        componentSettings: _componentSettings
    }
}

@connect(mapStateToProps)
@DragSource(DND.Constants.MOVE_COMPONENT, cardDrag, collectDrag)
class DragComponent extends DND.Components.Drag.Component {
    render() {
        const {
            connectDragPreview,
            connectDragSource,
            PreviewComponent,
            component,
            componentSettings
        } = this.props

        return connectDragPreview(
            <span>
                <SCLayout
                    isActive={
                        !isNull(componentSettings) &&
                        component.getIndex() === componentSettings.getIndex()
                    }
                >
                    <OptionsPreviewContainer>
                        {connectDragSource(
                            <span>
                                <OptionDrag
                                    style={{
                                        backgroundColor: '#02a0d2',
                                        fontSize: '14px',
                                        padding: '6px',
                                        borderRadis: '0px'
                                    }}
                                />
                            </span>
                        )}
                        <Templating.Components.Handle.Delete
                            component={component}
                        >
                            <OptionDelete
                                style={{
                                    backgroundColor: '#02a0d2',
                                    fontSize: '12px',
                                    padding: '5px',
                                    borderRadis: '0px'
                                }}
                            />
                        </Templating.Components.Handle.Delete>

                        <Templating.Components.Handle.Duplicate
                            component={component}
                        >
                            <OptionDuplicate
                                style={{
                                    backgroundColor: '#02a0d2',
                                    fontSize: '12px',
                                    padding: '5px',
                                    borderRadis: '0px'
                                }}
                            />
                        </Templating.Components.Handle.Duplicate>

                        <Settings.Components.Buttons.Settings
                            component={component}
                        >
                            <OptionSettings
                                style={{
                                    backgroundColor: '#02a0d2',
                                    fontSize: '12px',
                                    padding: '5px',
                                    borderRadis: '0px'
                                }}
                            />
                        </Settings.Components.Buttons.Settings>
                    </OptionsPreviewContainer>

                    <Settings.Components.Buttons.Settings component={component}>
                        <PreviewComponent.component component={component} />
                    </Settings.Components.Buttons.Settings>
                </SCLayout>
            </span>
        )
    }
}

export default function ConstructPreviewComponent(component, key) {
    let PreviewComponent = find(MjmlPreview, { type: component.type })

    if (isUndefined(PreviewComponent)) {
        return false
    }

    return (
        <DND.Components.Drop.Component key={key} component={component}>
            <DragComponent
                keySection={component.keySection}
                keyColumn={component.keyColumn}
                order={component.order}
                component={component}
                PreviewComponent={PreviewComponent}
            />
        </DND.Components.Drop.Component>
    )
}
