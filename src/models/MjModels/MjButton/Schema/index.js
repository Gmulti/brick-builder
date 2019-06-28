import { assignIn, cloneDeep, isUndefined } from 'lodash'
import Morphism from 'morphism'

import { Helpers } from '../../../../lib'

import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'
import BorderDetailSchema from '../../Base/Schema/BorderDetail'
import WidthSchema from '../../Base/Schema/Width'
import HeightSchema from '../../Base/Schema/Height'
import ContainerBackgroundColorSchema from '../../Base/Schema/ContainerBackgroundColor'

const schemaStyle = {}

const schemaAttributes = assignIn(
    cloneDeep(PaddingDetailSchema),
    cloneDeep(BorderDetailSchema),
    cloneDeep(WidthSchema),
    cloneDeep(HeightSchema),
    cloneDeep(ContainerBackgroundColorSchema),
    {
        'background-color': obj => {
            if (isUndefined(obj['background-color'])) {
                return null
            }
            return Helpers.transformColorSelector(obj['background-color'])
        },
        'border-radius': obj => {
            if (isUndefined(obj['border-radius'])) {
                return null
            }
            return Helpers.transformTypeObject(obj['border-radius'])
        },
        'font-size': obj => {
            if (isUndefined(obj['font-size'])) {
                return null
            }
            return Helpers.transformTypeObject(obj['font-size'])
        },
        href: 'href',
        rel: 'rel',
        target: 'target'
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
