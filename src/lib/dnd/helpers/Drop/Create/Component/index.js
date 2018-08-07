import { uniqueId } from "lodash"

export default function createComponent(keySection, keyColumn, params = {}) {
    return {
        ...params,
        key: Number(uniqueId(new Date().getTime())),
        keySection: keySection,
        keyColumn: keyColumn
    }
}
