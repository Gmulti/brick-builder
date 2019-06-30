import Morphism from 'morphism'
import { isUndefined, find } from 'lodash'

import MjModels from '../../../models/MjModels'

export default function transformMjStructure(mjStructures, type) {
    let MjModel = find(MjModels, { type: type })

    if (isUndefined(MjModel)) {
        return {}
    }

    let mapMjModel = Morphism.getMapper(MjModel.model)
    const _model = new MjModel.model()
    if (isUndefined(mapMjModel)) {
        mapMjModel = Morphism.register(MjModel.model, _model.mjmlSchema)
    }

    return mapMjModel(mjStructures)
}
