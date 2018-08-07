import getAfterOrBefore from "../../../getAfterOrBefore"

export default function preparePayloadSection(props, monitor, component, from = null) {
    
    const itemMonitor   = monitor.getItem()

    const afterOrBefore = getAfterOrBefore(monitor, component)

    let payload = {
        before: (afterOrBefore === "before") ? true : false,
        after: (afterOrBefore === "after") ? true : false
    }

    const _keySectionDrop = props.section.order
    const _keySectionDrag = monitor.getItem().order

    if (_keySectionDrop === _keySectionDrag) {
        return;
    }

    return {
        ...payload,
        dropOrder: _keySectionDrop,
        order: _keySectionDrag,

    }
}