import {
    GROUP_NAME,
    PADDING,
    BACKGROUND_COLOR
} from '../../../../lib/settings/components/Settings'
import {
    HANDLE_COLOR,
    HANDLE_TYPE_OBJECT,
    HANDLE_VALUE
} from '../../../../lib/settings/constants/Handle'
import {
    COLOR,
    TYPE_OBJECT_RANGE,
    SELECT_VALUE
} from '../../../../lib/settings/constants/BaseStyles'
import Fonts from '../../../../lib/templating/constants/fonts'

export default [
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
            styleKeyJS: 'backgroundColor',
            handleChangeSelector: index => {
                const divs = document.querySelectorAll(`#${index} div`)
                if (divs.length === 0) {
                    return null
                }

                return divs[divs.length - 1].parentNode
            }
        },
        order: 2,
        group: 3
    },
    {
        active: true,
        type: {
            handle: HANDLE_COLOR,
            baseStyles: COLOR
        },
        attributes: {
            styleKey: 'color',
            title: 'Text color',
            styleKeyJS: 'color'
            // handleChangeSelector: index => {
            //     return document.querySelector(`#${index}`)
            // }
        },
        order: 1,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_TYPE_OBJECT,
            baseStyles: TYPE_OBJECT_RANGE
        },
        attributes: {
            styleKey: 'font-size',
            styleKeyJS: 'fontSize',
            title: 'Font size',
            unitValueReadOnly: true
        },
        order: 2,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_VALUE,
            baseStyles: SELECT_VALUE
        },
        attributes: {
            styleKey: 'font-family',
            styleKeyJS: 'fontFamily',
            title: 'Font family',
            options: Fonts
        },
        order: 3,
        group: 1
    }
]
