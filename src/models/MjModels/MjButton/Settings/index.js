import { isNull } from 'lodash'
import {
    GROUP_NAME,
    BACKGROUND_COLOR
} from '../../../../lib/settings/components/Settings'
import {
    HANDLE_VALUE,
    HANDLE_TYPE_OBJECT
} from '../../../../lib/settings/constants/Handle'
import {
    TYPE_OBJECT_RANGE,
    VALUE
} from '../../../../lib/settings/constants/BaseStyles'

const selectorBtn = index => {
    let selectorBtn = document.querySelector(`#${index} p`)

    if (isNull(selectorBtn)) {
        selectorBtn = document.querySelector(`#${index} a`)
    }

    return selectorBtn
}

export default [
    {
        active: true,
        type: GROUP_NAME,
        attributes: {
            title: 'Button'
        },
        order: 1,
        group: 1
    },
    {
        active: true,
        type: BACKGROUND_COLOR,
        attributes: {
            handleChangeSelector: index => {
                const node = selectorBtn(index)
                const result = [node]
                if (node.parentNode) {
                    result.push(node.parentNode)
                }
                return result
            },
            styleKey: 'background-color',
            styleKeyJS: 'backgroundColor',
            title: 'Background Color button'
        },
        order: 2,
        group: 1
    },
    {
        active: true,
        type: BACKGROUND_COLOR,
        attributes: {
            handleChangeSelector: index => {
                const node = selectorBtn(index)
                if (isNull(node)) {
                    return null
                }

                return node.parentNode.parentNode.parentNode.parentNode
                    .parentNode.parentNode
            },
            styleKey: 'container-background-color',
            styleKeyJS: 'backgroundColor',
            title: 'Container background color'
        },
        order: 3,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_TYPE_OBJECT,
            baseStyles: TYPE_OBJECT_RANGE
        },
        attributes: {
            handleChangeSelector: selectorBtn,
            styleKey: 'font-size',
            styleKeyJS: 'fontSize',
            title: 'Font size',
            unitValueReadOnly: true
        },
        order: 4,
        group: 1
    },
    {
        active: true,
        type: {
            handle: HANDLE_TYPE_OBJECT,
            baseStyles: TYPE_OBJECT_RANGE
        },
        attributes: {
            handleChangeSelector: index => {
                const _selector = selectorBtn(index)
                if (isNull(_selector)) {
                    return null
                }

                return _selector.parentNode
            },
            styleKey: 'border-radius',
            styleKeyJS: 'borderRadius',
            title: 'Border radius',
            unitValueReadOnly: true
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
        type: {
            handle: HANDLE_VALUE,
            baseStyles: VALUE
        },
        attributes: {
            title: 'Text',
            styleKey: 'content'
        },
        order: 5,
        group: 1
    }
]
