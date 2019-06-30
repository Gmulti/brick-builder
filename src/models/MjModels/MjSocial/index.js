import { cloneDeep } from 'lodash'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'
import BaseMj from '../Base'
import Schema from './Schema'
import Settings from './Settings'
import { TYPE_MJ_SOCIAL } from '../constant'

export default class MjSocial extends BaseMj {
    static type = TYPE_MJ_SOCIAL

    tagName = 'mj-social'

    defaultAttributes = cloneDeep(DEFAULT_ATTRIBUTES)

    schema = Schema

    settings = Settings
}
