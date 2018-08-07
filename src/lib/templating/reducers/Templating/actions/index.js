import * as CONSTANT from './constant'

function promiseAction(action) {
    return dispatch => {
        dispatch(action)
        return Promise.resolve()
    }
}

export default class Actions {
    updateSection(payload) {
        return promiseAction({
            payload: payload,
            type: CONSTANT.UPDATE_SECTION
        })
    }

    updateColumn(payload) {
        return promiseAction({
            payload: payload,
            type: CONSTANT.UPDATE_COLUMN
        })
    }

    updateComponent(payload) {
        return promiseAction({
            payload: payload,
            type: CONSTANT.UPDATE_COMPONENT
        })
    }

    updateContainer(payload) {
        return promiseAction({
            payload: payload,
            type: CONSTANT.UPDATE_CONTAINER
        })
    }

    duplicateSection(payload) {
        return promiseAction({
            type: CONSTANT.DUPLICATE_SECTION,
            payload: payload
        })
    }

    duplicateColumn(payload) {
        return promiseAction({
            type: CONSTANT.DUPLICATE_COLUMN,
            payload: payload
        })
    }

    duplicateComponent(payload) {
        return promiseAction({
            type: CONSTANT.DUPLICATE_COMPONENT,
            payload: payload
        })
    }

    deleteSection(payload) {
        return promiseAction({
            type: CONSTANT.DELETE_SECTION,
            payload: payload
        })
    }

    deleteColumn(payload) {
        return promiseAction({
            type: CONSTANT.DELETE_COLUMN,
            payload: payload
        })
    }

    deleteComponent(payload) {
        return promiseAction({
            type: CONSTANT.DELETE_COMPONENT,
            payload: payload
        })
    }
}
