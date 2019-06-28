import { isUndefined } from 'lodash'
import { Helpers } from '../../../../../lib'

export default {
    width: obj => {
        if (isUndefined(obj.width)) {
            return null
        }

        return Helpers.transformTypeObject(obj.width)
    }
}
