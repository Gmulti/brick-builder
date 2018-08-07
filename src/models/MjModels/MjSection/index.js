import * as _ from 'lodash'
import Schema from './Schema'
import Morphism from 'morphism'
import BaseMj from '../Base'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'

import Settings from './Settings'
import Section from '../../../lib/components/models/Section'

export default class MjSection extends BaseMj {
    static type = Section.type

    tagName = 'mj-section'

    defaultAttributes = _.cloneDeep(DEFAULT_ATTRIBUTES)

    schema = Schema

    settings = Settings
}
