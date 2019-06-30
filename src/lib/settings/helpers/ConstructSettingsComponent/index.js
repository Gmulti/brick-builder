import React from 'react'
import Settings from '../../components/Settings'

import HandleSettings from '../../components/Handle'
import BaseStylesSettings from '../../components/Settings/BaseStyles'

import Alone from '../../components/ContainerSetting/Alone'
import { GROUP_NAME } from '../../../../lib/settings/components/Settings'
import Block from '../../../../ui/Settings/Block'
import {
    isString,
    chain,
    find,
    isUndefined,
    isObject,
    forOwn,
    isEmpty,
    each
} from 'lodash'

export default function ConstructSettingsComponent(component, props) {
    let SettingsPreview = chain(component.getSettings()) // Get settings for a component (file settings model)
        .map(setting => {
            if (!isString(setting.type)) {
                return setting
            }

            const settingFind = find(Settings, { type: setting.type })
            return {
                ...setting,
                component: settingFind.component
            }
        })
        .filter({ active: true })
        .groupBy('group')
        .value()

    if (isEmpty(SettingsPreview)) {
        return false
    }

    let constructWrapSettings = (Setting, keyS) => {
        const attributes = !isUndefined(Setting.attributes)
            ? Setting.attributes
            : {}

        let _composeComponent = false
        if (isObject(Setting.type)) {
            const Handle = find(HandleSettings, { type: Setting.type.handle })
            const BaseStyles = find(BaseStylesSettings, {
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
        } else if (isString(Setting.type)) {
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
    forOwn(SettingsPreview, (Settings, key) => {
        if (key === 0) {
            each(Settings, (Setting, keyS) =>
                _settings.push(constructWrapSettings(Setting, keyS))
            )
        } else {
            let _groupSettings = []
            let titleBlock = ''
            each(Settings, (Setting, keyS) => {
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
