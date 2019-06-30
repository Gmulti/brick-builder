import {
    GROUP_NAME,
    PADDING,
    BACKGROUND_COLOR,
    BORDER_RADIUS
} from '../../../../lib/settings/components/Settings'
import { HANDLE_COLOR } from '../../../../lib/settings/constants/Handle'
import { COLOR } from '../../../../lib/settings/constants/BaseStyles'
import { isEmpty } from 'lodash'

export default [
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Social'
        },
        order: 1,
        group: 1
    },
    {
        active: true,
        type: BORDER_RADIUS,
        attributes: {
            styleKey: 'border-radius',
            unitValueReadOnly: true
        },
        order: 2,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_COLOR,
            baseStyles: COLOR
        },
        attributes: {
            unitValueReadOnly: true,
            handleChangeSelector: index => {
                const nodes = document.querySelectorAll(`#${index} img`)
                let _nodesSelect = []

                if (isEmpty(nodes)) {
                    return _nodesSelect
                }

                nodes.forEach(node => {
                    _nodesSelect.push(
                        node.parentNode.parentNode.parentNode.parentNode
                            .parentNode
                    )
                })

                return _nodesSelect
            },
            styleKeyJS: 'backgroundColor',
            styleKey: [
                'facebook-icon-color',
                'twitter-icon-color',
                'google-icon-color'
            ]
        },
        order: 3,
        group: 1
    },
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Padding'
        },
        order: 1,
        group: 2
    },
    {
        active: true,
        type: PADDING,
        attributes: {},
        order: 2,
        group: 2
    },
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Background'
        },
        order: 1,
        group: 3
    },
    {
        active: true,
        type: BACKGROUND_COLOR,
        attributes: {
            styleKey: 'container-background-color',
            styleKeyJS: 'backgroundColor'
        },
        order: 2,
        group: 3
    }
]
