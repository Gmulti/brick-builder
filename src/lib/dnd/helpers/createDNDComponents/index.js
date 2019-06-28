import React from 'react'
import { isEmpty, isUndefined, filter } from 'lodash'

import { TYPE_SECTION } from '../../../../lib/components/models/constant'
import DragCreate from '../../components/Drag/Create'
import DragCreateSection from '../../components/Drag/CreateSection'
import StaticComponent from '../../components/Static/Component'
import MjCreateComponent from '../../../../components/CreateMjml/MjCreateComponent' // TODO : Remove this, over dependency

const getComponentCreate = ComponentCreate => {
    if (!isUndefined(ComponentCreate.component)) {
        return ComponentCreate.component
    }

    return MjCreateComponent
}

export default function createDNDComponents(components, drag = true, props) {
    let ComponentsCreate = filter(components, { active: true })

    if (isEmpty(ComponentsCreate)) {
        return false
    }

    if (drag) {
        return ComponentsCreate.map((ComponentCreate, key) => {
            const Component = getComponentCreate(ComponentCreate)

            let DragComponent = DragCreate
            if (ComponentCreate.type === TYPE_SECTION) {
                DragComponent = DragCreateSection
            }
            // This component can be drag
            return (
                <DragComponent key={key} params={ComponentCreate.params}>
                    <Component {...ComponentCreate.props} />
                </DragComponent>
            )
        })
    }

    return ComponentsCreate.map((ComponentCreate, key) => {
        const Component = getComponentCreate(ComponentCreate)

        // This component can not be drag. Just clicked
        return (
            <StaticComponent
                key={key}
                params={ComponentCreate.params}
                {...props}
            >
                <Component {...ComponentCreate.props} />
            </StaticComponent>
        )
    })
}
