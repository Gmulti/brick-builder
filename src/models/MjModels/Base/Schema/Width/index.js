import * as _ from "lodash"
import { Helpers } from "../../../../../lib";

export default {
    width: (obj) => {
        if (_.isUndefined(obj.width)) {
            return null
        }

        return Helpers.transformTypeObject(obj.width)
    }
}