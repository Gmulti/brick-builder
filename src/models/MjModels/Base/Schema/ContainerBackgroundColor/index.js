import { isUndefined } from 'lodash'
import { Helpers } from '../../../../../lib'

export default {
    'container-background-color': obj => {
        if (isUndefined(obj['container-background-color'])) {
            return null
        }
        return Helpers.transformColorSelector(obj['container-background-color'])
    }
}
