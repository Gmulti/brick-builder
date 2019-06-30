import { isNull } from 'lodash'
import {
    GROUP_NAME,
    PADDING,
    BACKGROUND_COLOR,
    TEXT_ALIGN
} from '../../../../lib/settings/components/Settings'
import {
    HANDLE_VALUE,
    HANDLE_IMAGE
} from '../../../../lib/settings/constants/Handle'
import {
    TYPE_OBJECT_RANGE,
    VALUE
} from '../../../../lib/settings/constants/BaseStyles'

const selectorImg = index => {
    let selectorImg = document.querySelector(`#${index} a`)

    if (isNull(selectorImg)) {
        selectorImg = document.querySelector(`#${index} img`)
    }

    return selectorImg
}

export default [
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Image'
        },
        order: 1,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_IMAGE,
            baseStyles: TYPE_OBJECT_RANGE
        },
        attributes: {
            unitValueReadOnly: true,
            handleChangeSelector: selectorImg,
            widthSelector: index => {
                const img = selectorImg(index)
                if (isNull(img)) {
                    return null
                }

                return img.parentNode.parentNode.parentNode.parentNode
                    .parentNode.parentNode
            },
            styleKey: 'width',
            styleKeyJS: 'width',
            title: 'Width'
        },
        order: 2,
        group: 1
    },
    {
        active: true,
        type: TEXT_ALIGN,
        attributes: {
            styleKey: 'align',
            title: 'Align'
        },
        order: 3,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_VALUE,
            baseStyles: VALUE
        },
        attributes: {
            styleKey: 'src',
            title: 'URL'
        },
        order: 4,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_VALUE,
            baseStyles: VALUE
        },
        attributes: {
            styleKey: 'href',
            title: 'Link'
        },
        order: 5,
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
            handleChangeSelector: index => {
                const img = selectorImg(index)
                if (isNull(img)) {
                    return null
                }

                return img.parentNode.parentNode.parentNode.parentNode
                    .parentNode.parentNode
            }
        },
        order: 2,
        group: 3
    }
]
