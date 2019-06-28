import { isUndefined } from 'lodash'
import { Helpers } from '../../../../../lib'

export default {
    height: obj => {
        if (isUndefined(obj.height)) {
            return null
        }

        return Helpers.transformTypeObject(obj.height)
    }
}
