import * as _ from 'lodash'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'
import BaseMj from '../Base'
import Schema from './Schema'
import Settings from './Settings'
import { TYPE_MJ_TEXT } from '../constant'

export default class MjText extends BaseMj {
    static type = TYPE_MJ_TEXT

    tagName = 'mj-text'

    defaultAttributes = _.cloneDeep(DEFAULT_ATTRIBUTES)

    content = 'New text'

    schema = Schema

    settings = Settings
}
