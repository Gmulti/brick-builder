import * as CONSTANT from "./constant"

function promiseAction(action){
    return (dispatch) => {

        dispatch(action)
        return Promise.resolve()
    }
}


export default class AppAction {

    changeActiveTabs(payload) {
        
        return promiseAction({
            payload: payload,
            type: CONSTANT.CHANGE_ACTIVE_TABS
        })
    }
    
    changeComponentSettings(payload) {

        return promiseAction({
            payload: payload,
            type: CONSTANT.CHANGE_COMPONENT_SETTINGS
        })
    }
}