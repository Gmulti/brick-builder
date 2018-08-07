import * as _ from "lodash"

import Models from "../../models/MjModels"

export default function ConstructMjmlModels(component) {
    let ModelChoice = _.find(Models, { type: component.type })

    return _.assignIn(new ModelChoice.model(), component)
}
