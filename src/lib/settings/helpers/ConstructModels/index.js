import { assignIn, find } from 'lodash'

export default function ConstructModels(models, component) {
    let ModelChoice = find(models, { type: component.type })

    return assignIn(new ModelChoice.model(), component)
}
