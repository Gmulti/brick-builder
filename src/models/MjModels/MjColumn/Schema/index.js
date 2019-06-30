import { assignIn, isUndefined, map } from 'lodash'
import Morphism from 'morphism'

import transformMjComponent from '../../../../helpers/transformStructureToMjml/transformMjComponent'
import DEFAULT_ATTRIBUTES from '../DefaultAttributes'
import { Helpers } from '../../../../lib'
import WidthSchema from '../../Base/Schema/Width'

const schemaStyle = {
    backgroundColor: obj => {
        if (isUndefined(obj['background-color'])) {
            return null
        }

        return Helpers.transformColorSelector(obj['background-color'])
    },
    width: obj => {
        if (isUndefined(obj.width)) {
            return Helpers.transformTypeObject(DEFAULT_ATTRIBUTES.width)
        }

        return Helpers.transformTypeObject(obj.width)
    }
}

const schemaAttributes = assignIn(WidthSchema, {
    'border-radius': obj => {
        if (isUndefined(obj['border-radius'])) {
            return Helpers.transformTypeObject(
                DEFAULT_ATTRIBUTES['border-radius']
            )
        }

        return Helpers.transformTypeObject(obj['border-radius'])
    },
    'background-color': obj => {
        if (isUndefined(obj['background-color'])) {
            return null
        }

        return Helpers.transformColorSelector(obj['background-color'])
    },
    'vertical-align': obj => {
        if (isUndefined(obj['vertical-align'])) {
            return DEFAULT_ATTRIBUTES['vertical-align']
        }

        return obj['vertical-align']
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
        path: 'components',
        fn: items => map(items, obj => transformMjComponent(obj))
    }
}

export default { mjmlObject, schemaAttributes, schemaStyle }
