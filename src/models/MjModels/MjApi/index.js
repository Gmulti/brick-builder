// import DEFAULT_ATTRIBUTES from "./DefaultAttributes"
import SETTINGS from './Settings'
import BaseMj from '../Base'
// import Schema from "./Schema"

import { TYPE_MJ_API } from '../constant'

export default class MjDivider extends BaseMj {
    static type = TYPE_MJ_API

    tagName = 'mj-api'

    settings = SETTINGS
}
