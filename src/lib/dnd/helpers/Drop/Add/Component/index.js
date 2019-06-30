import getAfterOrBefore from '../../../getAfterOrBefore'
import { FROM_EMPTY_COLUMN, FROM_EMPTY_SECTION } from '../../../../constants'

export default function preparePayloadComponent(
    props,
    monitor,
    component,
    from = null
) {
    const afterOrBefore = getAfterOrBefore(monitor, component)

    let payload = {
        before: afterOrBefore === 'before' ? true : false,
        after: afterOrBefore === 'after' ? true : false
    }

    let _keySectionDrop, _keyColumnDrop, _orderDrop

    switch (from) {
        case FROM_EMPTY_SECTION:
        case FROM_EMPTY_COLUMN:
            _keySectionDrop = props.column.keySection
            _keyColumnDrop = props.column.key
            _orderDrop = 1
            break

        default:
            _keySectionDrop = props.component.keySection
            _keyColumnDrop = props.component.keyColumn
            _orderDrop = props.component.order
            break
    }

    return {
        ...payload,
        keySection: _keySectionDrop,
        dropSection: _keySectionDrop,
        keyColumn: _keyColumnDrop,
        dropColumn: _keyColumnDrop,
        dropOrder: _orderDrop,
        order: _orderDrop
    }
}
