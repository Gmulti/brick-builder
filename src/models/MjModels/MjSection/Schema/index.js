import Morphism from 'morphism'
import { each, cloneDeep, isUndefined, assignIn } from 'lodash'

import { Helpers } from '../../../../lib'
import DEFAULT_ATTRIBUTES from '../DefaultAttributes'
import transformMjStructure from '../../../../helpers/transformStructureToMjml/transformMjStructure'
import MjColumn from '../../MjColumn'
import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'

let schemaPaddings = {}

each(['Top', 'Bottom', 'Left', 'Right'], direction => {
    schemaPaddings[`padding${direction}`] = obj => {
        const _name = direction.toLowerCase()
        if (isUndefined(obj[`padding-${_name}`])) {
            return Helpers.transformTypeObject(
                DEFAULT_ATTRIBUTES[`padding-${_name}`]
            )
        }
        return Helpers.transformTypeObject(obj[`padding-${_name}`])
    }
})

const schemaStyle = assignIn(schemaPaddings, {
    backgroundColor: obj => {
        if (isUndefined(obj['background-color'])) {
            return null
        }

        return Helpers.transformColorSelector(obj['background-color'])
    }
})

const schemaAttributes = assignIn(cloneDeep(PaddingDetailSchema), {
    'background-color': obj => {
        if (isUndefined(obj['background-color'])) {
            return null
        }

        return Helpers.transformColorSelector(obj['background-color'])
    },
    'full-width': obj => {
        if (isUndefined(obj['full-width'])) {
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
