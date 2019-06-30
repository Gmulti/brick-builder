import { cloneDeep } from 'lodash'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'
import SETTINGS from './Settings'
import BaseMj from '../Base'
import Schema from './Schema'

import { TYPE_MJ_DIVIDER } from '../constant'

export default class MjDivider extends BaseMj {
    static type = TYPE_MJ_DIVIDER

    tagName = 'mj-divider'

    defaultAttributes = cloneDeep(DEFAULT_ATTRIBUTES)

    settings = SETTINGS

    schema = Schema
}
