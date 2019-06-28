import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux'
import { isNull, filter, isUndefined, find, assignIn, orderBy } from 'lodash'

import { TABS_SETTINGS } from '../../constants/Tabs'
import TabsDefault from '../../components/Buttons/TabsDefault'

const propTypes = {
    ConstructModels: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    const _componentSettings = isNull(state.App.componentSettings)
        ? null
        : ownProps.ConstructModels(state.App.componentSettings)
    return {
        tabs: state.App.tabs,
        tabActive: find(state.App.tabs, { key: state.App.tabActive }),
        componentSettings: _componentSettings
    }
}

const styleTabLinkActive = {
    borderBottom: '3px solid #00a0d2',
    fontWeight: 600
}

@connect(mapStateToProps)
class Settings extends Component {
    _handleClick = tab => {
        const { actions } = this.props
        actions.changeActiveTabs(tab)
    }

    render() {
        const { tabs, tabActive } = this.props

        let _tabs = tabs
        if (!isUndefined(tabActive.visibleTabsIfActive)) {
            // Filter tabs necessary
            _tabs = filter(tabs, tab => {
                if (tab.key === tabActive.key) {
                    // Keep tab active
                    return tab
                }

                if (isUndefined(tabActive.visibleTabsIfActive)) {
                    return false
                }

                const tabFind = find(tabActive.visibleTabsIfActive, {
                    key: tab.key
                }) // Check on key visibleTabsIfActive

                if (!tabFind) {
                    return false
                }

                return assignIn(tab, tabFind)
            })
        }

        _tabs = orderBy(_tabs, ['order'])

        return (
            <Tabs
                name="tabsSettings"
                renderActiveTabContentOnly={true}
                selectedTab={tabActive.key}
                activeLinkStyle={styleTabLinkActive}
            >
                <div className="tabLinks">
                    {_tabs.map((tab, key) => {
                        if (tab.TabLink) {
                            return <tab.TabLink key={key} tab={tab} />
                        }

                        return (
                            <TabLink
                                key={key}
                                to={tab.key}
                                className="tabLinkContainer"
                            >
                                <TabsDefault tab={tab} className="tabLink" />
                            </TabLink>
                        )
                    })}
                </div>

                {_tabs.map((TabObj, key) => {
                    let propsTabObj = {}

                    if (TabObj.key == TABS_SETTINGS) {
                        propsTabObj = {
                            component: this.props.componentSettings,
                            actions: this.props.actions
                        }
                    }

                    return (
                        <TabContent
                            key={key}
                            for={TabObj.key}
                            className="layoutTabContent"
                        >
                            <TabObj.component {...propsTabObj} />
                        </TabContent>
                    )
                })}
                <style>
                    {`
                        .layoutTabContent {
                            height: 100%;
                        }
                        .tabLinks {
                            display: flex;
                            height: 50px;
                            background-color: #edeff0;
                            border-bottom: 1px solid #edeff0;
                        }
                        .tabLink {
                            align-items: center;
                            padding: 16px;
                            font-size: 1.4em;
                        }
                        
                        .tabLink:hover{
                            cursor:pointer;
                        }

                        .tabLink:focus {
                            outline: none;
                        }

                        .tabLinkContainer:focus {
                            outline: none;
                        }
                    `}
                </style>
            </Tabs>
        )
    }
}

Settings.propTypes = propTypes

export default Settings
