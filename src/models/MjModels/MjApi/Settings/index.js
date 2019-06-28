import {
    GROUP_NAME,
    IMPORT_BUTTON
} from '../../../../lib/settings/components/Settings'
import { HANDLE_API } from '../../../../lib/settings/constants/Handle'
import { SELECT_VALUE_SEARCH } from '../../../../lib/settings/constants/BaseStyles'

export default [
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Search'
        },
        order: 1,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_API,
            baseStyles: SELECT_VALUE_SEARCH
        },
        attributes: {},
        order: 2,
        group: 1
    },
    {
        active: true,
        type: IMPORT_BUTTON,
        order: 3,
        group: 1
    }
]
