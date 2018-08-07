import * as _ from 'lodash'


export default function ConstructModels(models, component) {
    let ModelChoice = _.find(models, { type: component.type })

    return _.assignIn(new ModelChoice.model(), component)
}