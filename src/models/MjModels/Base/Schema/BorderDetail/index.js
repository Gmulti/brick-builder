import * as _ from "lodash"
import { Helpers } from "../../../../../lib";

export default {
    "border-color": (obj) => {
        if (_.isUndefined(obj["border-color"])) {
            return null
        }

        return Helpers.transformColorSelector(obj["border-color"])
    },
    "border-width": (obj) => {
        
        if (_.isUndefined(obj["border-width"])) {
            return null
        }

        return Helpers.transformTypeObject(obj["border-width"])
    },
    "border-style": (obj) => {

        if (_.isUndefined(obj["border-style"])) {
            return null
        }

        return obj["border-style"]
    }
}