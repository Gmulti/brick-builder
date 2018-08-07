import {
    BACKGROUND_COLOR,
    WIDTH,
    BORDER_COLOR,
    GROUP_NAME,
    BORDER,
    PADDING,
    BORDER_STYLE,
    BORDER_WIDTH
} from '../../../../lib/settings/components/Settings'
import { HANDLE_TYPE_OBJECT } from '../../../../lib/settings/constants/Handle'
import { TYPE_OBJECT } from '../../../../lib/settings/constants/BaseStyles'

export default [
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Line'
        },
        order: 1,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_TYPE_OBJECT,
            baseStyles: TYPE_OBJECT
        },
        attributes: {
            title: 'Width',
            unitValueReadOnly: true,
            styleKey: 'width',
            styleKeyJS: 'width',
            handleChangeSelectorActive: false
        },
        order: 2,
        group: 1
    },
    {
        active: true,
        type: BORDER_STYLE,
        attributes: {},
        group: 1,
        order: 2
    },
    {
        active: true,
        type: BORDER_COLOR,
        attributes: {
            handleChangeSelector: index =>
                document.querySelector(`#${index} p`),
            styleKeyJs: 'borderColor'
        },
        group: 1,
        order: 2
    },
    {
        active: true,
        type: BORDER_WIDTH,
        attributes: {
            handleChangeSelector: index => {
                return document.querySelector(`#${index} p`)
            },
            styleKeyJS: 'borderWidth'
        },
        group: 1,
        order: 2
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
            handleChangeSelector: index => {
                const select = document.querySelector(`#${index} p`)
                if (select) {
                    return select.parentNode
                }

                return null
            },
            styleKey: 'container-background-color',
            styleKeyJS: 'backgroundColor'
        },
        order: 2,
        group: 3
    }
]
