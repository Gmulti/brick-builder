import { uniqueId } from 'lodash'

export default function createComponent(params = {}) {
    return {
        ...params,
        key: Number(uniqueId(new Date().getTime()))
    }
}
