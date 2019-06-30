import initialState from './initialState'
import * as CONSTANT from './actions/constant'

function app(state = initialState, { payload, type }) {
    switch (type) {
        case CONSTANT.CHANGE_ACTIVE_TABS:
            return {
                ...state,
                tabActive: payload
            }
        case CONSTANT.CHANGE_COMPONENT_SETTINGS:
            return {
                ...state,
                componentSettings: payload
            }
        default:
            return state
    }
}

export default app
