import React from 'react'
import Settings from '../../components/Settings'

import HandleSettings from '../../components/Handle'
import BaseStylesSettings from '../../components/Settings/BaseStyles'

import Alone from '../../components/ContainerSetting/Alone'
import Group from '../../components/ContainerSetting/Group'
import HandleChangeWithType from '../../components/Handle/HandleChangeWithType'
import TypeObject from '../../components/Settings/BaseStyles/TypeObject'
import { GROUP_NAME } from '../../../../lib/settings/components/Settings'
import Block from '../../../../ui/Settings/Block'
import * as _ from 'lodash'

export default function ConstructSettingsComponent(component, props) {
    let SettingsPreview = _.chain(component.getSettings()) // Get settings for a component (file settings model)
        .map(setting => {
            if (!_.isString(setting.type)) {
                return setting
            }

            const settingFind = _.find(Settings, { type: setting.type })
            return {
                ...setting,
                component: settingFind.component
            }
        })
        .filter({ active: true })
        .groupBy('group')
        .value()

    if (_.isEmpty(SettingsPreview)) {
        return false
    }

    let constructWrapSettings = (Setting, keyS) => {
        const attributes = !_.isUndefined(Setting.attributes)
            ? Setting.attributes
            : {}

        let _composeComponent = false
        if (_.isObject(Setting.type)) {
            const Handle = _.find(HandleSettings, { type: Setting.type.handle })
            const BaseStyles = _.find(BaseStylesSettings, {
                type: Setting.type.baseStyles
            })

            _composeComponent = (
                <Handle.component
                    component={component}
                    {...props}
                    {...attributes}
                >
                    <BaseStyles.component />
                </Handle.component>
            )
        } else if (_.isString(Setting.type)) {
            _composeComponent = (
                <Setting.component
                    component={component}
                    {...props}
                    {...attributes}
                />
            )
        } else {
            throw 'Error on settings component'
        }

        return (
            <Alone key={keyS} type={Setting.type}>
                {_composeComponent}
            </Alone>
        )
    }

    let _settings = []
    _.forOwn(SettingsPreview, (Settings, key) => {
        if (key === 0) {
            _.each(Settings, (Setting, keyS) =>
                _settings.push(constructWrapSettings(Setting, keyS))
            )
        } else {
            let _groupSettings = []
            let titleBlock = ''
            _.each(Settings, (Setting, keyS) => {
                if (Setting.type === GROUP_NAME) {
                    titleBlock = Setting.attributes.title
                } else {
                    _groupSettings.push(constructWrapSettings(Setting, keyS))
                }
            })

            _settings.push(
                <Block title={titleBlock} key={key}>
                    {_groupSettings}
                </Block>
            )
        }
    })

    return _settings
}
