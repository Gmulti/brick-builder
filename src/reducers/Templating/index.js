import { DND, Templating } from '../../lib'
import * as _ from 'lodash'

import initialState from './initialState'

function templating(state = initialState, { type, payload }) {
    let _state

    switch (type) {
        default:
            // TODO : Improve this
            _state = DND.Reducers.TemplatingReducer(state, {
                type,
                payload
            })
            _state = Templating.Reducers.TemplatingReducer(_state, {
                type,
                payload
            })
    }

    return _state
}

export default templating
