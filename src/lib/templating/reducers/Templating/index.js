import * as _ from 'lodash'
import * as CONSTANT from './actions/constant'
import { DND } from '../../../' // TODO : Improve this on create component / section / column

const duplicateSection = (payload, state) => {
    const _duplicateSection = DND.Helpers.Drop.Create.Section(payload) // Duplicate section

    // Duplicate columns in section
    const columns =
        state.columns && state.columns.length > 0 ? state.columns : []

    const _columnsInSection = _.filter(
        columns,
        obj => obj.keySection === payload.key
    )

    let _duplicateColumns = []
    let _duplicateComponents = []

    if (_.isEmpty(_columnsInSection)) {
        // No columns
        return {
            section: _duplicateSection,
            columns: _duplicateColumns,
            components: _duplicateComponents
        }
    }

    _.each(_columnsInSection, column => {
        let results = duplicateColumn(_duplicateSection.key, column, state)

        _duplicateColumns.push(results.column)
        _duplicateComponents = _.concat(
            _duplicateComponents,
            results.components
        )
    })

    return {
        section: _duplicateSection,
        columns: _duplicateColumns,
        components: _duplicateComponents
    }
}

const duplicateColumn = (keySection, payload, state) => {
    const _duplicateColumn = DND.Helpers.Drop.Create.Column(keySection, payload)

    const components =
        state.components && state.components.length > 0 ? state.components : []

    // Duplicate components in columns in section
    const _componentsInColumnInSection = _.filter(
        components,
        obj =>
            obj.keySection === payload.keySection &&
            obj.keyColumn === payload.key
    )

    let _duplicateComponents = []

    if (_.isEmpty(_componentsInColumnInSection)) {
        // No components
        return { column: _duplicateColumn, components: _duplicateComponents }
    }

    _.each(_componentsInColumnInSection, component => {
        _duplicateComponents.push(
            duplicateComponent(keySection, _duplicateColumn.key, component)
        )
    })

    return {
        column: _duplicateColumn,
        components: _duplicateComponents
    }
}

const duplicateComponent = (keySection, keyColumn, payload) =>
    DND.Helpers.Drop.Create.Component(keySection, keyColumn, payload)

function TemplatingReducer(state, { type, payload }) {
    let results
    switch (type) {
        case CONSTANT.DELETE_COMPONENT:
            return {
                ...state,
                components: _.filter(
                    state.components,
                    obj => obj.key !== payload.key
                )
            }
        case CONSTANT.DELETE_SECTION:
            return {
                ...state,
                sections: _.filter(
                    state.sections,
                    obj => obj.key !== payload.key
                )
            }
        case CONSTANT.DELETE_COLUMN:
            return {
                ...state,
                columns: _.filter(state.columns, obj => obj.key !== payload.key)
            }
        case CONSTANT.DUPLICATE_SECTION:
            results = duplicateSection(payload, state)

            const sections =
                state.sections && state.sections.length > 0
                    ? state.sections
                    : []
            sections.push(results.section)

            return {
                ...state,
                sections: sections,
                columns: _.concat(state.columns, results.columns),
                components: _.concat(state.components, results.components)
            }

        case CONSTANT.DUPLICATE_COLUMN:
            results = duplicateColumn(payload, state)

            const columns =
                state.columns && state.columns.length > 0 ? state.columns : []

            columns.push(results.column)

            return {
                ...state,
                columns: columns,
                components: _.concat(state.components, results.components)
            }
        case CONSTANT.DUPLICATE_COMPONENT:
            const components =
                state.components && state.components.length > 0
                    ? state.components
                    : []
            components.push(
                duplicateComponent(
                    payload.keySection,
                    payload.keyColumn,
                    payload
                )
            )

            return {
                ...state,
                components: components
            }

        case CONSTANT.UPDATE_CONTAINER:
            return {
                ...state,
                container: payload
            }
        case CONSTANT.UPDATE_SECTION:
            return {
                ...state,
                sections: _.map(
                    state.sections,
                    section =>
                        section.key !== payload.key
                            ? section
                            : _.merge(section, payload)
                )
            }
        case CONSTANT.UPDATE_COLUMN:
            return {
                ...state,
                columns: _.map(
                    state.columns,
                    column =>
                        column.key !== payload.key ||
                        column.keySection !== payload.keySection
                            ? column
                            : _.merge(column, payload)
                )
            }
        case CONSTANT.UPDATE_COMPONENT:
            return {
                ...state,
                components: _.map(state.components, component => {
                    return component.key !== payload.key ||
                        component.keySection !== payload.keySection ||
                        component.keyColumn !== payload.keyColumn
                        ? component
                        : _.merge(component, payload)
                })
            }
        default:
            return state
    }
}

export default TemplatingReducer
