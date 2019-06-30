import { cloneDeep, assignIn } from 'lodash'
import Morphism from 'morphism'

import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'
import BorderDetailSchema from '../../Base/Schema/BorderDetail'
import WidthSchema from '../../Base/Schema/Width'
import ContainerBackgroundColorSchema from '../../Base/Schema/ContainerBackgroundColor'

const schemaStyle = {}

const schemaAttributes = assignIn(
    cloneDeep(PaddingDetailSchema),
    cloneDeep(BorderDetailSchema),
    cloneDeep(WidthSchema),
    cloneDeep(ContainerBackgroundColorSchema)
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
