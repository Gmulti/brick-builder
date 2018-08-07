import * as _ from 'lodash'
import Morphism from 'morphism'

import DEFAULT_ATTRIBUTES from '../DefaultAttributes'
import { Helpers } from '../../../../lib'

import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'
import BorderDetailSchema from '../../Base/Schema/BorderDetail'
import WidthSchema from '../../Base/Schema/Width'
import ContainerBackgroundColorSchema from '../../Base/Schema/ContainerBackgroundColor'

const schemaStyle = {}

const schemaAttributes = _.assignIn(
    _.cloneDeep(PaddingDetailSchema),
    _.cloneDeep(BorderDetailSchema),
    _.cloneDeep(WidthSchema),
    _.cloneDeep(ContainerBackgroundColorSchema)
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
