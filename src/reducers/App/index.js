import { isUndefined } from 'lodash'
import { Settings } from '../../lib'
import * as CONSTANT from './actions/constant'
import initialState from './initialState'

function app(state = initialState, action) {
    if (isUndefined(action)) {
        return state
    }

    const { type, payload } = action

    switch (type) {
        case CONSTANT.UPDATE_SELECT_OPTIONS_API:
            return {
                ...state,
                searchApiOptions: payload.response.data
            }
        case CONSTANT.UPDATE_VALUE_SELECTED_API:
            return {
                ...state,
                valueSelectedApi: payload
            }
        default:
            return Settings.Reducers.AppReducer(state, { type, payload })
    }
}

export default app
