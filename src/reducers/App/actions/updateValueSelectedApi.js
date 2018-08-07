import { UPDATE_VALUE_SELECTED_API } from './constant'

export const updateValueSelectedApi = payload => {
    return { payload: payload, type: UPDATE_VALUE_SELECTED_API }
}
