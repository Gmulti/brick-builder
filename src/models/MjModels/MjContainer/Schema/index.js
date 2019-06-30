import Morphism from 'morphism'
import { isUndefined } from 'lodash'
import DEFAULT_ATTRIBUTES from '../DefaultAttributes'

import { Helpers } from '../../../../lib'

const schemaStyle = {
    backgroundColor: obj => {
        if (isUndefined(obj['background-color'])) {
            return Helpers.transformColorSelector(
                DEFAULT_ATTRIBUTES['background-color']
            )
        }

        return Helpers.transformColorSelector(obj['background-color'])
    }
}

const schemaAttributes = {
    'background-color': obj => {
        if (isUndefined(obj['background-color'])) {
            return Helpers.transformColorSelector(
                DEFAULT_ATTRIBUTES['background-color']
            )
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

const mjmlObject = {
    attributes: {
        path: 'attributes',
        fn: (attributes, obj) => {
            let mapper = Morphism(schemaAttributes)
            const results = mapper(obj.componentAttributes)
            return results ? results : {}
        }
    }
}

export default { mjmlObject, schemaAttributes, schemaStyle }
