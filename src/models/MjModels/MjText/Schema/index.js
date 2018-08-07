import * as _ from 'lodash'
import Morphism from 'morphism'

import { Helpers } from '../../../../lib'
import DEFAULT_ATTRIBUTES from '../DefaultAttributes'

import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'
import ContainerBackgroundColorSchema from '../../Base/Schema/ContainerBackgroundColor'

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
    fontSize: obj => {
        if (_.isUndefined(obj['font-size'])) {
            return Helpers.transformTypeObject(DEFAULT_ATTRIBUTES['font-size'])
        }

        return Helpers.transformTypeObject(obj['font-size'])
    },
    fontFamily: obj => {
        if (_.isUndefined(obj['font-family'])) {
            return 'Helvetica, Arial, sans-serif'
        }

        return obj['font-family'] + ', Helvetica, Arial, sans-serif'
    },
    color: obj => {
        if (_.isUndefined(obj.color)) {
            return Helpers.transformColorSelector(DEFAULT_ATTRIBUTES.color)
        }
        return Helpers.transformColorSelector(obj.color)
    },
    backgroundColor: obj => {
        if (_.isUndefined(obj['container-background-color'])) {
            return Helpers.transformColorSelector(
                DEFAULT_ATTRIBUTES['container-background-color']
            )
        }
        return Helpers.transformColorSelector(obj['container-background-color'])
    },
    textAlign: 'align'
})

const schemaAttributes = _.assignIn(
    _.cloneDeep(PaddingDetailSchema),
    _.cloneDeep(ContainerBackgroundColorSchema),
    {
        color: obj => {
            if (_.isUndefined(obj.color)) {
                return null
            }
            return Helpers.transformColorSelector(obj.color)
        },
        'font-family': obj => {
            if (_.isUndefined(obj['font-family'])) {
                return 'Ubuntu, Helvetica, Arial, sans-serif'
            }

            return obj['font-family'] + ', Helvetica, Arial, sans-serif'
        },
        'line-height': obj => {
            if (_.isUndefined(obj['line-height'])) {
                return Helpers.transformTypeObject(
                    DEFAULT_ATTRIBUTES['line-height']
                )
            }

            return Helpers.transformTypeObject(obj['line-height'])
        },
        align: 'align',
        'font-weight': 'font-weight',
        'font-size': obj => {
            if (_.isUndefined(obj['font-size'])) {
                return null
            }

            return Helpers.transformTypeObject(obj['font-size'])
        }
    }
)

const mjmlObject = {
    content: 'content',
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
