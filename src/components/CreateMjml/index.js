import MjCreateComponent from './MjCreateComponent'
import { find } from 'lodash'

import * as MJ_CONSTANT from '../../models/MjModels/constant'
import MjmlPreview from '../../models/MjModels/index'
import TextSVG from '../../ui/svg/paragraph'
import ButtonSvg from '../../ui/svg/button'
import DividerSVG from '../../ui/svg/divider'
import SpacerSVG from '../../ui/svg/spacer'

const MjText = find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_TEXT }).model
const MjImage = find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_IMAGE }).model
const MjSpacer = find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_SPACER }).model
const MjDivider = find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_DIVIDER }).model
const MjSocial = find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_SOCIAL }).model
const MjButton = find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_BUTTON }).model

export default [
    {
        active: true,
        type: MJ_CONSTANT.TYPE_MJ_TEXT,
        component: MjCreateComponent,
        props: {
            name: 'Text',
            tags: ['paragraph', 'content'],
            icon: TextSVG
        },
        params: {
            type: MJ_CONSTANT.TYPE_MJ_TEXT,
            attributes: new MjText().getAttributes()
        }
    },
    {
        active: true,
        type: MJ_CONSTANT.TYPE_MJ_BUTTON,
        component: MjCreateComponent,
        props: {
            name: 'Button',
            tags: ['link', 'btn'],
            icon: ButtonSvg
        },
        params: {
            type: MJ_CONSTANT.TYPE_MJ_BUTTON,
            attributes: new MjButton().getAttributes()
        }
    },
    {
        active: true,
        component: MjCreateComponent,
        props: {
            name: 'Divider',
            tags: ['separation', 'hr', 'line'],
            icon: DividerSVG
        },
        params: {
            type: MJ_CONSTANT.TYPE_MJ_DIVIDER,
            attributes: new MjDivider().getAttributes()
        }
    },
    {
        active: true,
        component: MjCreateComponent,
        props: {
            name: 'Spacer',
            tags: ['space', 'sep'],
            icon: SpacerSVG
        },
        params: {
            type: MJ_CONSTANT.TYPE_MJ_SPACER,
            attributes: new MjSpacer().getAttributes()
        }
    },
    {
        active: true,
        component: MjCreateComponent,
        props: {
            name: 'Image',
            tags: ['picture', 'img'],
            icon: 'image'
        },
        params: {
            type: MJ_CONSTANT.TYPE_MJ_IMAGE,
            attributes: new MjImage().getAttributes()
        }
    },
    {
        active: true,
        component: MjCreateComponent,
        props: {
            name: 'Social',
            tags: ['fb', 'facebook', 'twitter', 'network'],
            icon: 'thumbs-up'
        },
        params: {
            type: MJ_CONSTANT.TYPE_MJ_SOCIAL,
            attributes: new MjSocial().getAttributes()
        }
    }
]
