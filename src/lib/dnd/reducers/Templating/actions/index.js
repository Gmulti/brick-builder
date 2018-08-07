import * as CONSTANT from './constant'

function promiseAction(action) {
    return dispatch => {
        dispatch(action)
        return Promise.resolve()
    }
}

export default class Actions {
    addComponentsFromApi(payload) {
        return promiseAction({
            type: CONSTANT.ADD_COMPONENTS_FROM_API,
            payload: payload
        })
    }
    addComponents(payload) {
        return promiseAction({
            type: CONSTANT.ADD_COMPONENTS,
            payload: payload
        })
    }
    addColumn(payload) {
        return promiseAction({
            type: CONSTANT.ADD_COLUMN,
            payload: payload
        })
    }

    addColumns(payload) {
        return promiseAction({
            type: CONSTANT.ADD_COLUMNS,
            payload: payload
        })
    }

    addSection(payload) {
        return promiseAction({
            type: CONSTANT.ADD_SECTION,
            payload: payload
        })
    }

    addComponent(payload) {
        return promiseAction({
            type: CONSTANT.ADD_COMPONENT,
            payload: payload
        })
    }

    updateSectionPosition(payload) {
        return promiseAction({
            payload: payload,
            type: CONSTANT.UPDATE_SECTION_POSITION
        })
    }

    updateColumnPosition(payload) {
        return promiseAction({
            payload: payload,
            type: CONSTANT.UPDATE_COLUMN_POSITION
        })
    }
    updateComponentPosition(payload) {
        return promiseAction({
            payload: payload,
            type: CONSTANT.UPDATE_COMPONENT_POSITION
        })
    }
}
