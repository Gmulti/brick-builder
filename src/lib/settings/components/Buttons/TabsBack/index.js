import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TabLink } from 'react-tabs-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft'
import AppActions from '../../../reducers/App/actions' // TODO : Too dependency

function mapStateToProps(state) {
    return {
        tabDefault: state.App.tabDefault
    }
}

function mapDispatchToProps(dispatch) {
    const _actions = new AppActions()
    return {
        actions: bindActionCreators(
            {
                changeComponentSettings: _actions.changeComponentSettings,
                changeActiveTabs: _actions.changeActiveTabs
            },
            dispatch
        )
    }
}

@connect(
    mapStateToProps,
    mapDispatchToProps
)
class TabsBack extends Component {
    _handleClick = e => {
        const { actions, tabDefault } = this.props
        actions.changeActiveTabs(tabDefault).then(() => {
            actions.changeComponentSettings(null)
        })
    }

    render() {
        return (
            <TabLink
                to={this.props.tab.key}
                className="tabLinkBack"
                handleSelect={this._handleClick}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
                <style jsx>
                    {`
                        .tabLinkBack {
                            align-items: center;
                            padding: 16px;
                            &:focus {
                                outline: none;
                            }
                        }
                    `}
                </style>
            </TabLink>
        )
    }
}

export default TabsBack
