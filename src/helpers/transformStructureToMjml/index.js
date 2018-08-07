import { mjml2html } from 'mjml'
import { each } from 'lodash'

import transformMjStructure from './transformMjStructure'
import MjSection from '../../models/MjModels/MjSection'
import transformMjComponent from './transformMjComponent'

export default function transformStructureToMjml(config, params) {
    const _mjml = {
        tagName: 'mjml',
        attributes: {},
        children: []
    }

    const _transformContainer = transformMjComponent(params.container)
    const _childrensContainer = {
        tagName: 'mj-container',
        attributes: _transformContainer.attributes,
        children: []
    }

    const _items = transformMjStructure(config, MjSection.type)
    each(_items, mjSection => {
        _childrensContainer.children.push(mjSection)
    })

    const _childrenBody = {
        tagName: 'mj-body',
        attributes: {},
        children: [_childrensContainer]
    }

    _mjml.children.push(_childrenBody)

    return mjml2html(_mjml)
}
