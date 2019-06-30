import { isUndefined } from 'lodash'
import Morphism from 'morphism'

import { Helpers } from '../../../../lib'
import DEFAULT_ATTRIBUTES from '../DefaultAttributes'

const schemaStyle = {}

const schemaAttributes = {
    height: obj => {
        if (isUndefined(obj.height)) {
            return Helpers.transformTypeObject(DEFAULT_ATTRIBUTES.height)
        }

        return Helpers.transformTypeObject(obj.height)
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
