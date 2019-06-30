import { each, isUndefined } from 'lodash'
import { Helpers } from '../../../../../lib'

let schemaPaddings = {}

each(['top', 'bottom', 'left', 'right'], direction => {
    schemaPaddings[`padding-${direction}`] = obj => {
        if (isUndefined(obj[`padding-${direction}`])) {
            return null
        }

        return Helpers.transformTypeObject(obj[`padding-${direction}`])
    }
})

export default schemaPaddings
