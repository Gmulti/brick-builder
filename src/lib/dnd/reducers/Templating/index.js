import {
    map,
    isUndefined,
    cloneDeep,
    each,
    remove,
    concat,
    filter
} from 'lodash'
import * as CONSTANT from './actions/constant'
import createComponent from '../../helpers/Drop/Create/Component'

const updateOrders = (arr, payload) => {
    // Update orders for object in state

    return map(arr, item => {
        // Update next items for before condition
        if (payload.before && item.order >= payload.dropOrder) {
            // && item.order !== payload.order
            item.order++
            return item
        }

        // Update next items for after condition
        if (payload.after && item.order > payload.dropOrder) {
            // && item.order !== payload.order
            item.order++
            return item
        }

        return item
    })
}

const updateNewPosition = (arr, payload) => {
    // Update position for new object in state
    return map(arr, item => {
        // Item position for before condition
        if (payload.before) {
            item.order = payload.dropOrder
        }
        // Item position for after condition
        if (payload.after) {
            item.order = payload.dropOrder + 1
        }

        if (!isUndefined(payload.dropSection)) {
            item.keySection = payload.dropSection
        }

        if (!isUndefined(payload.dropColumn)) {
            item.keyColumn = payload.dropColumn
        }

        return item
    })
}

function TemplatingReducer(state, { type, payload }) {
    let _state, _dropComponent, _components, _restComponents, _drop, _sections
    switch (type) {
        case CONSTANT.ADD_COMPONENTS_FROM_API:
            _state = cloneDeep(state)
            let _newComponents = []
            let _dropOrder = payload.component.order

            each(payload.data, dataComponent => {
                const _component = createComponent(
                    payload.component.keySection,
                    payload.component.keyColumn,
                    {
                        ...dataComponent,
                        after: true,
                        before: false,
                        dropOrder: _dropOrder,
                        dropColumn: payload.component.keyColumn,
                        dropSection: payload.component.keySection
                    }
                )

                _restComponents = remove(
                    _state.components,
                    component =>
                        component.keySection !== payload.component.keySection ||
                        component.keyColumn !== payload.component.keyColumn
                )

                _dropComponent = updateNewPosition([_component], _component)
                _components = updateOrders(_state.components, _component)
                _dropOrder = _dropComponent.order

                _state.components = concat(
                    _restComponents,
                    _components,
                    _dropComponent
                )
            })

            // TODO : Observable delete component
            _state = {
                ..._state,
                components: filter(
                    _state.components,
                    obj => obj.key !== payload.component.key
                )
            }

            return _state
        case CONSTANT.ADD_SECTION:
            _state = cloneDeep(state)

            _drop = remove(_state.sections, section => {
                if (payload.before) {
                    return section.order >= payload.dropOrder
                } else if (payload.after) {
                    return section.order > payload.dropOrder
                }
            })
            _drop = updateOrders(_drop, payload)

            const _resultSections = concat(_state.sections, _drop, payload)

            return { ..._state, sections: _resultSections }

        case CONSTANT.ADD_COMPONENT:
            _state = cloneDeep(state)

            _restComponents = remove(
                _state.components,
                component =>
                    component.keySection !== payload.keySection ||
                    component.keyColumn !== payload.keyColumn
            )
            _dropComponent = updateNewPosition([payload], payload)
            _components = updateOrders(_state.components, payload)

            return {
                ..._state,
                components: concat(_restComponents, _components, _dropComponent)
            }

        case CONSTANT.ADD_COLUMNS:
            return { ...state, columns: [...state.columns, ...payload] }
        case CONSTANT.ADD_COLUMN:
            return { ...state, columns: [...state.columns, payload] }

        case CONSTANT.UPDATE_SECTION_POSITION:
            _state = cloneDeep(state)

            _drop = remove(
                _state.sections,
                section => section.order === payload.order
            )
            _drop = updateNewPosition(_drop, payload)

            _sections = updateOrders(_state.sections, payload)
            const _result = concat(_sections, _drop)

            return { ..._state, sections: _result }

        case CONSTANT.UPDATE_COLUMN_POSITION:
            _state = cloneDeep(state)

            let _dropColumn = remove(
                _state.columns,
                column =>
                    column.order === payload.order &&
                    column.keySection === payload.keySection
            )
            const _rest = remove(
                _state.columns,
                column => column.keySection !== payload.dropSection
            )

            let _columns = updateOrders(_state.columns, payload)
            _dropColumn = updateNewPosition(_dropColumn, payload)

            return {
                ..._state,
                columns: concat(_rest, _columns, _dropColumn)
            }

        case CONSTANT.UPDATE_COMPONENT_POSITION:
            _state = cloneDeep(state)

            _dropComponent = remove(
                _state.components,
                component =>
                    component.order === payload.order &&
                    component.keySection === payload.keySection &&
                    component.keyColumn === payload.keyColumn
            )

            _restComponents = remove(
                _state.components,
                component =>
                    component.keySection !== payload.dropSection ||
                    component.keyColumn !== payload.dropColumn
            )

            _components = updateOrders(_state.components, payload)
            _dropComponent = updateNewPosition(_dropComponent, payload)

            return {
                ..._state,
                components: concat(_restComponents, _components, _dropComponent)
            }
        default:
            return state
    }
}

export default TemplatingReducer
