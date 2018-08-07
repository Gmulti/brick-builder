import * as _ from 'lodash'
import MODEL from '../../models/MjModels'

const findModel = obj => _.find(MODEL, { type: obj.type }).model

export default function constructStructureTemplating(state) {
    if (_.isUndefined(state.sections)) {
        return {}
    }

    let constructStructure = state => {
        return _
            .chain(state.sections)
            .map((section, keySection) => {
                let constructSection = (section, keySection) => {
                    return _
                        .chain(state.columns)
                        .filter({ keySection: section.key })
                        .map((column, keyColumn) => {
                            let constructColumn = (column, keyColumn) => {
                                return _
                                    .chain(state.components)
                                    .filter({
                                        keySection: section.key,
                                        keyColumn: column.key
                                    })
                                    .map(obj => {
                                        const _Model = findModel(obj)
                                        return _.assignIn(new _Model(), obj)
                                    })
                                    .orderBy('order', 'asc')
                            }

                            const _Model = findModel(column)
                            column = _.assignIn(new _Model(), column)
                            return _.set(
                                column,
                                'components',
                                constructColumn(column, keyColumn).value()
                            )
                        })
                        .orderBy('order', 'asc')
                }

                const _Model = findModel(section)

                section = _.assignIn(new _Model(), section)

                return _.set(
                    section,
                    'columns',
                    constructSection(section, keySection).value()
                )
            })
            .orderBy('order', 'asc')
    }

    return constructStructure(state).value()
}
