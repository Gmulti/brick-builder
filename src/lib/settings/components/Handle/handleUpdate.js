import {
    TYPE_CONTAINER,
    TYPE_SECTION,
    TYPE_COLUMN
} from '../../../components/models/constant'

const handleUpdate = (component, actions) => {
    if (component.type === TYPE_CONTAINER) {
        actions.updateContainer(component)
        return
    }

    if (component.type === TYPE_SECTION) {
        actions.updateSection(component)
        return
    }

    if (component.type === TYPE_COLUMN) {
        actions.updateColumn(component)
        return
    }

    actions.updateComponent(component)
}

export default handleUpdate
