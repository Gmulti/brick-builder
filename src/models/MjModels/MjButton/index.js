import { cloneDeep } from 'lodash'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'
import BaseMj from '../Base'
import Schema from './Schema'
import Settings from './Settings'

import { TYPE_MJ_BUTTON } from '../constant'

export default class MjButton extends BaseMj {
    static type = TYPE_MJ_BUTTON

    tagName = 'mj-button'

    defaultAttributes = cloneDeep(DEFAULT_ATTRIBUTES)

    schema = Schema

    settings = Settings

    content = 'New button'
}
