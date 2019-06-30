import { cloneDeep } from 'lodash'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'
import BaseMj from '../Base'
import Schema from './Schema'
import Settings from './Settings'

import { TYPE_MJ_IMAGE } from '../constant'

export default class MjImage extends BaseMj {
    static type = TYPE_MJ_IMAGE

    tagName = 'mj-image'

    defaultAttributes = cloneDeep(DEFAULT_ATTRIBUTES)

    schema = Schema

    settings = Settings
}
