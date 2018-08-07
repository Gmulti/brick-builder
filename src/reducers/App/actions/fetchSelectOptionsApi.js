import { FETCH_SELECT_OPTIONS_API } from './constant'

export const fetchSelectOptionsApi = payload => {
    return {
        payload: payload,
        type: FETCH_SELECT_OPTIONS_API
    }
}
