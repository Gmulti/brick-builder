import {
    COLOR,
    TYPE_OBJECT,
    TYPE_OBJECT_RANGE,
    SELECT_VALUE,
    VALUE,
    SELECT_VALUE_SEARCH
} from "../../../constants/BaseStyles"

import Color from "./Color"
import TypeObject from "./TypeObject"
import TypeObjectRange from "./TypeObjectRange"
import SelectValue from "./SelectValue"
import SelectValueSearch from "./SelectValueSearch"
import Value from "./Value"

export default [
    {
        type: SELECT_VALUE_SEARCH,
        component: SelectValueSearch
    },
    {
        type: COLOR,
        component: Color
    },
    {
        type: TYPE_OBJECT,
        component: TypeObject
    },
    {
        type: TYPE_OBJECT_RANGE,
        component: TypeObjectRange
    },
    {
        type: SELECT_VALUE,
        component: SelectValue
    },
    {
        type: VALUE,
        component: Value
    }
]
