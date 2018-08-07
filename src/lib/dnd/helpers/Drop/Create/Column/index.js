import { uniqueId } from "lodash"

export default function createColumn(keySection, params = {}) {
    return {
        ...params,
        key: Number(uniqueId(new Date().getTime())),
        keySection: keySection
    }
}
