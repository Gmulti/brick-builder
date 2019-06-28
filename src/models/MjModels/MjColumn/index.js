import Schema from './Schema'
import BaseMj from '../Base'
import Column from '../../../lib/components/models/Column'

export default class MjColumn extends BaseMj {
    static type = Column.type

    tagName = 'mj-column'

    schema = Schema

    defaultStylesPreview = {
        textAlign: 'left',
        boxSizing: 'border-box',
        verticalAlign: 'top',
        display: 'inline-block',
        position: 'relative'
    }
}
