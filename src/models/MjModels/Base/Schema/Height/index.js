import * as _ from "lodash"
import { Helpers } from "../../../../../lib";

export default {
    height: (obj) => {
        if (_.isUndefined(obj.height)) {
            return null
        }

        return Helpers.transformTypeObject(obj.height)
    }
}