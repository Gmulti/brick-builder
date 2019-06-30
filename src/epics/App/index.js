import { assignIn, isUndefined } from 'lodash'
import * as CONSTANT_SETTINGS from '../../lib/settings/reducers/App/actions/constant'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'

import { updateSelectOptionsApi } from '../../reducers/App/actions/updateSelectOptionsApi'
import { Helpers, DND, Settings } from '../../lib'
import * as CONSTANT_MODELS from '../../models/MjModels/constant'
import * as CONSTANT_APP from '../../reducers/App/actions/constant'
import { TABS_DEFAULT } from '../../constants/Tabs'

const headersDefault = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
const ajaxDefault = {
    headers: headersDefault,
    responseType: 'json',
    crossDomain: true
}

const serachOptions = ({ payload }) => {
    const ajaxParams = !isUndefined(payload.ajaxParams)
        ? payload.ajaxParams
        : {}

    const url = Helpers.buildUrl(payload.handleSelectSearch, {
        queryParams: assignIn(
            {
                search: payload.searchValue || ''
            },
            payload.queryParamsSelectSearch || {}
        )
    })

    return ajax(assignIn(ajaxDefault, { url: url }, ajaxParams)).map(
        response => {
            return updateSelectOptionsApi(response)
        }
    )
}

export const getSelectOptionsApi = (action$, store) => {
    return action$
        .ofType(CONSTANT_SETTINGS.CHANGE_COMPONENT_SETTINGS)
        .filter(
            ({ payload }) =>
                payload !== null && payload.type === CONSTANT_MODELS.TYPE_MJ_API
        )
        .mergeMap(serachOptions)
}

export const searchSelectOptionsApi = action$ => {
    return action$
        .ofType(CONSTANT_APP.FETCH_SELECT_OPTIONS_API)
        .mergeMap(serachOptions)
}

export const addComponentApi = action$ => {
    return action$
        .ofType(CONSTANT_APP.FETCH_ADD_COMPONENT_API)
        .mergeMap(({ payload }) => {
            const ajaxParams = !isUndefined(payload.ajaxParams)
                ? payload.ajaxParams
                : {}

            const url = Helpers.buildUrl(payload.handleSelectAdd, {
                queryParams: assignIn(
                    {
                        search: payload.searchValue || ''
                    },
                    payload.queryParamsAddComponentApi || {}
                )
            })
            const actions = new DND.Reducers.TemplatingActions()

            return ajax(assignIn(ajaxDefault, { url: url }, ajaxParams)).map(
                res => {
                    return actions.addComponentsFromApi({
                        component: payload,
                        data: res.response.data
                    })
                }
            )
        })
}

export const addComponentsFromApi = action$ => {
    return action$
        .ofType(DND.Reducers.TemplatingConstant.ADD_COMPONENTS_FROM_API)
        .flatMap(({ payload }) => {
            const actionSettings = new Settings.Reducers.AppActions()
            return Observable.concat(
                Observable.of(actionSettings.changeComponentSettings(null)),
                Observable.of(actionSettings.changeActiveTabs(TABS_DEFAULT))
            )
        })
}

export default {
    getSelectOptionsApi,
    getSelectOptionsApi,
    addComponentsFromApi,
    addComponentApi
}
