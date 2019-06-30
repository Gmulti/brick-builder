import { cloneDeep } from 'lodash'
import Schema from './Schema'
import BaseMj from '../Base'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'

import Settings from './Settings'
import Section from '../../../lib/components/models/Section'

export default class MjSection extends BaseMj {
    static type = Section.type

    tagName = 'mj-section'

    defaultAttributes = cloneDeep(DEFAULT_ATTRIBUTES)

    schema = Schema

    settings = Settings
}
