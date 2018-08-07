import { UPDATE_SELECT_OPTIONS_API } from './constant'

export const updateSelectOptionsApi = payload => {
    return { payload: payload, type: UPDATE_SELECT_OPTIONS_API }
}
