import MjDivider from './MjDivider'
import MjDividerModel from '../../models/MjModels/MjDivider'

import MjImage from './MjImage'
import MjImageModel from '../../models/MjModels/MjImage'

import MjSpacer from './MjSpacer'
import MjSpacerModel from '../../models/MjModels/MjSpacer'

import MjSocial from './MjSocial'
import MjSocialModel from '../../models/MjModels/MjSocial'

import MjText from './MjText'
import MjTextModel from '../../models/MjModels/MjText'

import MjApi from './MjApi'
import MjApiModel from '../../models/MjModels/MjApi'

import MjButton from './MjButton'
import MjButtonModel from '../../models/MjModels/MjButton'

export default [
    {
        type: MjButtonModel.type,
        model: MjButtonModel,
        component: MjButton
    },
    {
        type: MjDividerModel.type,
        model: MjDividerModel,
        component: MjDivider
    },
    {
        type: MjImageModel.type,
        model: MjImageModel,
        component: MjImage
    },
    {
        type: MjSpacerModel.type,
        model: MjSpacerModel,
        component: MjSpacer
    },
    {
        type: MjSocialModel.type,
        model: MjSocialModel,
        component: MjSocial
    },
    {
        type: MjTextModel.type,
        model: MjTextModel,
        component: MjText
    },
    {
        type: MjApiModel.type,
        model: MjApiModel,
        component: MjApi
    }
]
