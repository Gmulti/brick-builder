import {
    TYPE_SECTION,
    TYPE_COLUMN
} from '../../../../components/models/constant'

const handleDuplicate = (component, actions) => {
    if (component.type === TYPE_SECTION) {
        actions.duplicateSection(component)
        return
    }

    if (component.type === TYPE_COLUMN) {
        actions.duplicateColumn(column)
        return
    }

    return actions.duplicateComponent(component)
}

export default handleDuplicate
