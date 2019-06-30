import { cloneDeep } from 'lodash'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'
import BaseMj from '../Base'
import Schema from './Schema'
import Settings from './Settings'
import { TYPE_MJ_SPACER } from '../constant'

export default class MjSpacer extends BaseMj {
    static type = TYPE_MJ_SPACER

    tagName = 'mj-spacer'

    defaultAttributes = cloneDeep(DEFAULT_ATTRIBUTES)

    schema = Schema

    settings = Settings
}
