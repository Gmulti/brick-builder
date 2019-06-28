import { extend, isUndefined } from 'lodash'
import Morphism from 'morphism'

export default class BaseMj {
    getSettings = () => {
        return this.settings || {}
    }

    getSchema() {
        // DEPRECATED : Remove this and replace by .schemaObj

        return this.schema || {}
    }

    get schemaObj() {
        return this.schema || {}
    }

    getMjmlSchema() {
        // DEPRECATED : Remove this and replace by .mjmlSchema

        if (!this.getSchema()) {
            return {}
        }

        return this.getSchema().mjmlObject
    }

    get mjmlSchema() {
        return !this.schemaObj ? {} : this.schemaObj.mjmlObject
    }

    getIndex() {
        // MjSection
        if (isUndefined(this.keySection) && isUndefined(this.keyColumn)) {
            return `mj-${this.key}`
        }

        // MjColumn
        if (isUndefined(this.keyColumn)) {
            return `mj-${this.keySection}-${this.key}`
        }

        return `mj-${this.keySection}-${this.keyColumn}-${this.key}`
    }

    getStylePreviewSchema() {
        if (!this.getSchema()) {
            return {}
        }

        return this.getSchema().schemaStyle
    }

    getAttributes() {
        // DEPRECATED : Remove this and replace by .componentAttributes

        let _defaultAttributes = {}
        if (this.defaultAttributes) {
            _defaultAttributes = this.defaultAttributes
        }

        return extend(_defaultAttributes, this.attributes || {})
    }

    get componentAttributes() {
        let _defaultAttributes = {}
        if (this.defaultAttributes) {
            _defaultAttributes = this.defaultAttributes
        }

        return extend(_defaultAttributes, this.attributes || {})
    }

    getStylePreview = () => {
        let mapper = Morphism(this.getStylePreviewSchema())

        let _defaultStylesPreview = {}

        if (this.defaultStylesPreview) {
            _defaultStylesPreview = this.defaultStylesPreview
        }

        const _attributes = this.getAttributes()

        return extend(mapper(_attributes), _defaultStylesPreview)
    }

    getKey() {
        return this.key
    }
}
