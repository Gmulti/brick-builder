import HandleChangeValue from "./HandleChangeValue"
import HandleChangeWithType from "./HandleChangeWithType"
import HandleChangeColor from "./HandleChangeColor"
import HandleChangeImage from "./HandleChangeImage"
import HandleChangeApi from "./HandleChangeApi"

import * as CONSTANT from "../../constants/Handle"

export default [
    {
        type: CONSTANT.HANDLE_TYPE_OBJECT,
        component: HandleChangeWithType
    },
    {
        type: CONSTANT.HANDLE_VALUE,
        component: HandleChangeValue
    },
    {
        type: CONSTANT.HANDLE_COLOR,
        component: HandleChangeColor
    },
    {
        type: CONSTANT.HANDLE_IMAGE,
        component: HandleChangeImage
    },
    {
        type: CONSTANT.HANDLE_API,
        component: HandleChangeApi
    }
]
