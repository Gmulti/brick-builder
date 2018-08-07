import {
    TYPE_SECTION,
    TYPE_COLUMN
} from '../../../../components/models/constant'

const handleDelete = (component, actions) => {
    if (component.type === TYPE_SECTION) {
        actions.deleteSection(component)
        return
    }

    if (component.type === TYPE_COLUMN) {
        actions.deleteColumn(column)
        return
    }

    return actions.deleteComponent(component)
}

export default handleDelete
