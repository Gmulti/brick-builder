import * as _ from 'lodash'
import Morphism from 'morphism'
import MjModels from '../../../models/MjModels'

export default function transformMjComponent(obj) {
    let MjModel = _.find(MjModels, { type: obj.type })

    if (_.isUndefined(MjModel)) {
        return {}
    }

    let mapMjModel = Morphism.getMapper(MjModel.model)
    if (_.isUndefined(mapMjModel)) {
        mapMjModel = Morphism.register(MjModel.model, obj.mjmlSchema)
    }

    return mapMjModel(obj)
}
