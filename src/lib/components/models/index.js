import * as TYPE_CONSTANT from './constant'

import ColumnModel from './Column'
import SectionModel from './Section'
import ContainerModel from './Container'

export default [
    {
        type: TYPE_CONSTANT.TYPE_CONTAINER,
        model: ContainerModel
    },
    {
        type: TYPE_CONSTANT.TYPE_COLUMN,
        model: ColumnModel
    },
    {
        type: TYPE_CONSTANT.TYPE_SECTION,
        model: SectionModel
    }
]
