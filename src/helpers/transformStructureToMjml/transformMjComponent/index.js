import { isUndefined, find } from 'lodash'
import Morphism from 'morphism'
import MjModels from '../../../models/MjModels'

export default function transformMjComponent(obj) {
    let MjModel = find(MjModels, { type: obj.type })

    if (isUndefined(MjModel)) {
        return {}
    }

    let mapMjModel = Morphism.getMapper(MjModel.model)
    if (isUndefined(mapMjModel)) {
        mapMjModel = Morphism.register(MjModel.model, obj.mjmlSchema)
    }

    return mapMjModel(obj)
}
