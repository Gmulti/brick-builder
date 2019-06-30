import { merge } from 'lodash'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import rootEpics from '../epics'

import moduleReducers from '../reducers/index'

import initialStateApp from '../reducers/App/initialState'
import initialStateTemplating from '../reducers/Templating/initialState'
import initialStateTemplatingTest from '../reducers/Templating/templateTest'
const dev = process.env.NODE_ENV !== 'production'

const configureStore = initialState => {
    let store = false

    const composeEnhancers =
        (dev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
    const initState = merge(
        { App: initialStateApp },
        { Templating: initialStateTemplatingTest },
        initialState
    )

    const epicMiddleware = createEpicMiddleware(rootEpics)
    let middlewares = [thunkMiddleware, epicMiddleware]
    if (dev) {
        middlewares.push(createLogger())
    }

    store = createStore(
        moduleReducers,
        initState,
        composeEnhancers(applyMiddleware(...middlewares))
    )

    return store
}

export default configureStore
