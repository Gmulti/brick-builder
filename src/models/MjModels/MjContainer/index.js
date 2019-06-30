import { cloneDeep } from 'lodash'
import BaseMj from '../Base'
import DEFAULT_ATTRIBUTES from './DefaultAttributes'
import Schema from './Schema'
import Settings from './Settings'
import Container from '../../../lib/components/models/Container'

export default class MjContainer extends BaseMj {
    static type = Container.type

    defaultAttributes = cloneDeep(DEFAULT_ATTRIBUTES)

    tagName = 'mj-container'

    schema = Schema

    settings = Settings

    defaultStylesPreview = { height: '100%' }

    getIndex() {
        return 'container-preview'
    }
}
