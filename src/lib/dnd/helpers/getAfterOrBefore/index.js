import { findDOMNode } from 'react-dom';

export default function getAfterOrBefore(monitor, component){
    try{

        const { y = 0 } = monitor.getClientOffset();
        const { top, height } = findDOMNode(component).getBoundingClientRect();

        if (y < top + height / 2) {
            return "before"
        } else {
            return "after"
        }
    }
    catch(e) {
        return null
    }
}