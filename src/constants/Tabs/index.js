import Components from '../../containers/Settings/Components'
import General from '../../containers/Settings/General'
import SettingsComponent from '../../lib/settings/containers/Settings/SettingsComponent'
import { TABS_SETTINGS } from '../../lib/settings/constants/Tabs'

export const TABS_DEFAULT = '3'
export const TABS_GENERAL = '4'

export default [
    {
        key: TABS_DEFAULT,
        title: 'Component',
        component: Components,
        order: 1,
        visibleTabsIfActive: [
            {
                order: 2,
                key: TABS_SETTINGS
            },
            {
                order: 3,
                key: TABS_GENERAL
            }
        ]
    },
    {
        key: TABS_SETTINGS,
        title: 'Settings',
        component: SettingsComponent,
        order: 2,
        visibleTabsIfActive: [
            {
                order: 1,
                key: TABS_DEFAULT
            },
            {
                order: 3,
                key: TABS_GENERAL
            }
        ]
    },
    {
        key: TABS_GENERAL,
        title: 'General',
        component: General,
        order: 3,
        visibleTabsIfActive: [
            {
                order: 2,
                key: TABS_SETTINGS
            },
            {
                order: 1,
                key: TABS_DEFAULT
            }
        ]
    }
]
