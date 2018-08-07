import getAfterOrBefore from "../../../getAfterOrBefore"
import {  FROM_EMPTY_COLUMN, FROM_EMPTY_SECTION } from "../../../../constants"

export default function preparePayloadComponent(props, monitor, component, from = null) {

    const itemMonitor   = monitor.getItem()
    const afterOrBefore = getAfterOrBefore(monitor, component)

    let payload = {
        before: (afterOrBefore === "before") ? true : false,
        after: (afterOrBefore === "after") ? true : false
    }

    let _keySectionDrop, _keyColumnDrop, _orderDrop;

    switch (from) {
        case FROM_EMPTY_COLUMN:
        case FROM_EMPTY_SECTION:
            _keySectionDrop = props.column.keySection
            _keyColumnDrop  = props.column.key
            _orderDrop      = 1
            break;
        default:
            _keySectionDrop = props.component.keySection
            _keyColumnDrop  = props.component.keyColumn
            _orderDrop      = props.component.order
            break;

    }

    const _keySectionDrag = monitor.getItem().keySection
    const _keyColumnDrag  = monitor.getItem().keyColumn
    const _orderDrag      = monitor.getItem().order

    if (
        _keySectionDrop === _keySectionDrag &&
        _keyColumnDrop === _keyColumnDrag &&
        _orderDrop === _orderDrag
    ) {
        return;
    }

    return {
        ...payload,
        dropSection: _keySectionDrop,
        dropColumn: _keyColumnDrop,
        dropOrder: _orderDrop,
        keySection: _keySectionDrag,
        keyColumn: _keyColumnDrag,
        order: _orderDrag,

    }
}