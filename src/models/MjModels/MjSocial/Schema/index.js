import { cloneDeep, isUndefined, assignIn } from 'lodash'
import Morphism from 'morphism'

import { Helpers } from '../../../../lib'
import PaddingDetailSchema from '../../Base/Schema/PaddingDetail'
import ContainerBackgroundColorSchema from '../../Base/Schema/ContainerBackgroundColor'

function transformColorIcon(obj, key) {
    if (isUndefined(obj[this])) {
        return null
    }

    return Helpers.transformColorSelector(obj[this])
}

const schemaStyle = {}

const schemaAttributes = assignIn(
    cloneDeep(ContainerBackgroundColorSchema),
    cloneDeep(PaddingDetailSchema),
    {
        'facebook-icon-color': transformColorIcon.bind('facebook-icon-color'),
        'twitter-icon-color': transformColorIcon.bind('twitter-icon-color'),
        'google-icon-color': transformColorIcon.bind('google-icon-color'),
        'instagram-icon-color': transformColorIcon.bind('instagram-icon-color'),
        'linkedin-icon-color': transformColorIcon.bind('linkedin-icon-color'),
        'pinterest-icon-color': transformColorIcon.bind('pinterest-icon-color'),
        'container-background-color': transformColorIcon.bind(
            'container-background-color'
        )
    },
    { mode: 'mode' }
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
