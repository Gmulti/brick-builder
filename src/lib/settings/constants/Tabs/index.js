import SettingsComponent from '../../containers/Settings/SettingsComponent'

import TabsBack from '../../components/Buttons/TabsBack'

export const TABS_BACK = '1'
export const TABS_SETTINGS = '2'

export default [
    {
        key: TABS_BACK,
        TabLink: TabsBack
    },
    {
        key: TABS_SETTINGS,
        title: 'Settings',
        component: SettingsComponent,
        visibleTabsIfActive: []
    }
]
