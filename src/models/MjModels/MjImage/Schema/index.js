import { cloneDeep, assignIn } from 'lodash'
import Morphism from 'morphism'

import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'
import WidthSchema from '../../Base/Schema/Width'
import HeightSchema from '../../Base/Schema/Height'
import ContainerBackgroundColorSchema from '../../Base/Schema/ContainerBackgroundColor'

const schemaStyle = {}

const schemaAttributes = assignIn(
    cloneDeep(PaddingDetailSchema),
    cloneDeep(WidthSchema),
    cloneDeep(HeightSchema),
    cloneDeep(ContainerBackgroundColorSchema),
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
