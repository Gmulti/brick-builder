import React from 'react'
import { find, isUndefined } from 'lodash'
import { DragSource } from 'react-dnd'

import MjmlPreview from '../../components/MjmlPreview/constant'
import OptionsPreview from '../../components/OptionsPreview/Container/Component'
import OptionDrag from '../../components/OptionsPreview/Drag'
import OptionSettings from '../../components/OptionsPreview/Settings'
import OptionDelete from '../../components/OptionsPreview/Delete'
import OptionDuplicate from '../../components/OptionsPreview/Duplicate'
import { DND, Settings, Templating } from '../../lib'
import styled from 'styled-components'

const SCLayout = styled.div`
    position: relative;
    :hover {
        .options {
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

@DragSource(DND.Constants.MOVE_COMPONENT, cardDrag, collectDrag)
class DragComponent extends DND.Components.Drag.Component {
    render() {
        const {
            connectDragPreview,
            connectDragSource,
            PreviewComponent,
            component
        } = this.props

        return connectDragPreview(
            <span>
                <SCLayout>
                    <OptionsPreview>
                        {connectDragSource(
                            <span>
                                <OptionDrag />
                            </span>
                        )}
                        <Templating.Components.Handle.Delete
                            component={component}
                        >
                            <OptionDelete />
                        </Templating.Components.Handle.Delete>

                        <Templating.Components.Handle.Duplicate
                            component={component}
                        >
                            <OptionDuplicate />
                        </Templating.Components.Handle.Duplicate>

                        <Settings.Components.Buttons.Settings
                            component={component}
                        >
                            <OptionSettings />
                        </Settings.Components.Buttons.Settings>
                    </OptionsPreview>

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
