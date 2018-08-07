import * as _ from "lodash"
import { Helpers } from "../../../../../lib";

export default {
    "container-background-color": (obj) => {
        if (_.isUndefined(obj["container-background-color"])) {
            return null
        }
        return Helpers.transformColorSelector(obj["container-background-color"])
    }
}