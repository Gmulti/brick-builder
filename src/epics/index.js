import { combineEpics } from 'redux-observable'

import {
    getSelectOptionsApi,
    searchSelectOptionsApi,
    addComponentApi,
    addComponentsFromApi
} from './App'

const epics = [getSelectOptionsApi, searchSelectOptionsApi, addComponentApi, addComponentsFromApi]

const rootEpic = combineEpics(...epics)

export default rootEpic
