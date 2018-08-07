import * as _ from "lodash"
import { Helpers } from "../../../../../lib";


let schemaPaddings = {}

_.each(["top", "bottom", "left", "right"], (direction) => {
    schemaPaddings[`padding-${direction}`] = (obj) => {
        if (_.isUndefined(obj[`padding-${direction}`])) {
            return null
        }

        return Helpers.transformTypeObject(obj[`padding-${direction}`])
    }
})

export default schemaPaddings