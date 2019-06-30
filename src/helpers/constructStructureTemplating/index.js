import { find, isUndefined, chain, set, assignIn } from 'lodash'
import MODEL from '../../models/MjModels'

const findModel = obj => find(MODEL, { type: obj.type }).model

export default function constructStructureTemplating(state) {
    if (isUndefined(state.sections)) {
        return {}
    }
    let constructStructure = state => {
        return chain(state.sections)
            .map((section, keySection) => {
                let constructSection = (section, keySection) => {
                    return chain(state.columns)
                        .filter({ keySection: section.key })
                        .map((column, keyColumn) => {
                            let constructColumn = (column, keyColumn) => {
                                return chain(state.components)
                                    .filter({
                                        keySection: section.key,
                                        keyColumn: column.key
                                    })
                                    .map(obj => {
                                        const _Model = findModel(obj)
                                        return assignIn(new _Model(), obj)
                                    })
                                    .orderBy('order', 'asc')
                            }

                            const _Model = findModel(column)
                            column = assignIn(new _Model(), column)
                            return set(
                                column,
                                'components',
                                constructColumn(column, keyColumn).value()
                            )
                        })
                        .orderBy('order', 'asc')
                }

                const _Model = findModel(section)

                section = assignIn(new _Model(), section)

                return set(
                    section,
                    'columns',
                    constructSection(section, keySection).value()
                )
            })
            .orderBy('order', 'asc')
    }

    return constructStructure(state).value()
}
