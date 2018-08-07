import * as _ from 'lodash'
import Morphism from 'morphism'

import { Helpers } from '../../../../lib'

import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'
import WidthSchema from '../../Base/Schema/Width'
import HeightSchema from '../../Base/Schema/Height'
import ContainerBackgroundColorSchema from '../../Base/Schema/ContainerBackgroundColor'

const schemaStyle = {}

const schemaAttributes = _.assignIn(
    _.cloneDeep(PaddingDetailSchema),
    _.cloneDeep(WidthSchema),
    _.cloneDeep(HeightSchema),
    _.cloneDeep(ContainerBackgroundColorSchema),
    {
        src: 'src',
        href: 'href',
        align: 'align'
    }
)

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
