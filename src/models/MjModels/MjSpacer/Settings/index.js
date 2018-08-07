import {
    WIDTH,
    GROUP_NAME,
    PADDING,
    BACKGROUND_COLOR
} from '../../../../lib/settings/components/Settings'
import { HANDLE_TYPE_OBJECT } from '../../../../lib/settings/constants/Handle'
import { TYPE_OBJECT_RANGE } from '../../../../lib/settings/constants/BaseStyles'

export default [
    {
        active: true,
        type: {
            handle: HANDLE_TYPE_OBJECT,
            baseStyles: TYPE_OBJECT_RANGE
        },
        attributes: {
            title: 'Spacer',
            styleKey: 'height',
            styleKeyJS: 'height',
            unitValueReadOnly: true
        },
        order: 1,
        group: 1
    }
]
