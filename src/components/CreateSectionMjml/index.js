import MjCreateSection from './MjCreateSection'
import * as _ from 'lodash'

import * as MODEL_CONSTANT from '../../lib/components/models/constant'
import MjmlPreview from '../../models/MjModels/index'

const MjSection = _.find(MjmlPreview, { type: MODEL_CONSTANT.TYPE_SECTION })
    .model

const columnsCreate = _.map([1, 2], nb => {
    return {
        active: true,
        type: MODEL_CONSTANT.TYPE_SECTION,
        component: MjCreateSection,
        props: { nbColumn: nb },
        params: {
            type: MODEL_CONSTANT.TYPE_SECTION,
            createNbColumn: nb,
            typeColumn: MODEL_CONSTANT.TYPE_COLUMN,
            attributes: new MjSection().getAttributes()
        }
    }
})

export default columnsCreate
