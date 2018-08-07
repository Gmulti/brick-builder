import Morphism from 'morphism'
import * as _ from 'lodash'

import MjModels from '../../../models/MjModels'

export default function transformMjStructure(mjStructures, type) {
    let MjModel = _.find(MjModels, { type: type })

    if (_.isUndefined(MjModel)) {
        return {}
    }

    let mapMjModel = Morphism.getMapper(MjModel.model)
    const _model = new MjModel.model()
    if (_.isUndefined(mapMjModel)) {
        mapMjModel = Morphism.register(MjModel.model, _model.mjmlSchema)
    }

    return mapMjModel(mjStructures)
}
