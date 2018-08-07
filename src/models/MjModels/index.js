import * as TYPE_CONSTANT from './constant'
import * as MODEL_CONSTANT from '../../lib/components/models/constant'

import MjDividerModel from './MjDivider'
import MjTextModel from './MjText'
import MjImageModel from './MjImage'
import MjSpacerModel from './MjSpacer'
import MjSocialModel from './MjSocial'
import MjColumnModel from './MjColumn'
import MjApi from './MjApi'
import MjSectionModel from './MjSection/index'
import MjButtonModel from './MjButton/index'
import MjContainerModel from './MjContainer'

export default [
    {
        type: TYPE_CONSTANT.TYPE_MJ_BUTTON,
        model: MjButtonModel
    },
    {
        type: MODEL_CONSTANT.TYPE_CONTAINER,
        model: MjContainerModel
    },
    {
        type: TYPE_CONSTANT.TYPE_MJ_API,
        model: MjApi
    },
    {
        type: MODEL_CONSTANT.TYPE_COLUMN,
        model: MjColumnModel
    },
    {
        type: MODEL_CONSTANT.TYPE_SECTION,
        model: MjSectionModel
    },
    {
        type: TYPE_CONSTANT.TYPE_MJ_IMAGE,
        model: MjImageModel
    },
    {
        type: TYPE_CONSTANT.TYPE_MJ_DIVIDER,
        model: MjDividerModel
    },
    {
        type: TYPE_CONSTANT.TYPE_MJ_TEXT,
        model: MjTextModel
    },
    {
        type: TYPE_CONSTANT.TYPE_MJ_SOCIAL,
        model: MjSocialModel
    },
    {
        type: TYPE_CONSTANT.TYPE_MJ_SPACER,
        model: MjSpacerModel
    }
]
