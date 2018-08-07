import { combineReducers } from 'redux'

import Templating from './Templating/index.js'
import App from './App/index.js'

const moduleReducers = combineReducers({
    Templating,
    App
})

export default moduleReducers
