import {
    BACKGROUND_COLOR,
    WIDTH,
    BORDER_COLOR,
    GROUP_NAME,
    BORDER,
    PADDING,
    BORDER_STYLE,
    BORDER_WIDTH
} from '../../../../lib/settings/components/Settings'
import { HANDLE_TYPE_OBJECT } from '../../../../lib/settings/constants/Handle'
import { TYPE_OBJECT } from '../../../../lib/settings/constants/BaseStyles'

export default [
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Padding'
        },
        order: 1,
        group: 2
    },
    {
        active: true,
        type: PADDING,
        attributes: {},
        order: 2,
        group: 2
    },
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Background'
        },
        order: 1,
        group: 3
    },
    {
        active: true,
        type: BACKGROUND_COLOR,
        attributes: {
            styleKey: 'background-color',
            styleKeyJS: 'backgroundColor'
        },
        order: 2,
        group: 3
    }
]
