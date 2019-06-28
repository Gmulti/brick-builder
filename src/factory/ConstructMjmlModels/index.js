import { find, assignIn } from 'lodash'

import Models from '../../models/MjModels'

export default function ConstructMjmlModels(component) {
    let ModelChoice = find(Models, { type: component.type })

    return assignIn(new ModelChoice.model(), component)
}
