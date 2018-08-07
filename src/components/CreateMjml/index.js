import MjCreateComponent from './MjCreateComponent'
import * as _ from 'lodash'

import * as MJ_CONSTANT from '../../models/MjModels/constant'
import MjmlPreview from '../../models/MjModels/index'

const MjText = _.find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_TEXT }).model
const MjImage = _.find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_IMAGE }).model
const MjSpacer = _.find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_SPACER }).model
const MjDivider = _.find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_DIVIDER })
    .model
const MjSocial = _.find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_SOCIAL }).model
const MjButton = _.find(MjmlPreview, { type: MJ_CONSTANT.TYPE_MJ_BUTTON }).model

export default [
    {
        active: true,
        type: MJ_CONSTANT.TYPE_MJ_TEXT,
        component: MjCreateComponent,
        props: {
            name: 'Text',
            tags: ['paragraph', 'content']
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
            tags: ['link', 'btn']
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
            tags: ['separation', 'hr', 'line']
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
            tags: ['space', 'sep']
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
            tags: ['picture', 'img']
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
            tags: ['fb', 'facebook', 'twitter', 'network']
        },
        params: {
            type: MJ_CONSTANT.TYPE_MJ_SOCIAL,
            attributes: new MjSocial().getAttributes()
        }
    }
]
