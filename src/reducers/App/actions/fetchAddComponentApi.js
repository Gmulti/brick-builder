import { FETCH_ADD_COMPONENT_API } from './constant'

export const fetchAddComponentApi = payload => {
    return {
        payload: payload,
        type: FETCH_ADD_COMPONENT_API
    }
}
