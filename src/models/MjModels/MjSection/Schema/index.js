import Morphism from 'morphism'
import * as _ from 'lodash'

import { Helpers } from '../../../../lib'
import DEFAULT_ATTRIBUTES from '../DefaultAttributes'
import transformMjStructure from '../../../../helpers/transformStructureToMjml/transformMjStructure'
import MjColumn from '../../MjColumn'
import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'

let schemaPaddings = {}

_.each(['Top', 'Bottom', 'Left', 'Right'], direction => {
    schemaPaddings[`padding${direction}`] = obj => {
        const _name = direction.toLowerCase()
        if (_.isUndefined(obj[`padding-${_name}`])) {
            return Helpers.transformTypeObject(
                DEFAULT_ATTRIBUTES[`padding-${_name}`]
            )
        }
        return Helpers.transformTypeObject(obj[`padding-${_name}`])
    }
})

const schemaStyle = _.assignIn(schemaPaddings, {
    backgroundColor: obj => {
        if (_.isUndefined(obj['background-color'])) {
            return null
        }

        return Helpers.transformColorSelector(obj['background-color'])
    }
})

const schemaAttributes = _.assignIn(_.cloneDeep(PaddingDetailSchema), {
    'background-color': obj => {
        if (_.isUndefined(obj['background-color'])) {
            return null
        }

        return Helpers.transformColorSelector(obj['background-color'])
    },
    'full-width': obj => {
        if (_.isUndefined(obj['full-width'])) {
            return null
        }

        if (!obj['full-width']) {
            return null
        }

        return 'full-width'
    }
})

const mjmlObject = {
    attributes: {
        path: 'attributes',
        fn: (attributes, obj) => {
            let mapper = Morphism(schemaAttributes)
            const results = mapper(obj.componentAttributes)
            return results ? results : {}
        }
    },
    children: {
        path: 'columns',
        fn: mjSection => transformMjStructure(mjSection, MjColumn.type)
    }
}

export default { mjmlObject, schemaAttributes, schemaStyle }
