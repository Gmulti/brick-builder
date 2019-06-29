import MjCreateSection from './MjCreateSection'
import { map, find } from 'lodash'

import * as MODEL_CONSTANT from '../../lib/components/models/constant'
import MjmlPreview from '../../models/MjModels/index'
import ColumnSVG from '../../ui/svg/column'

const MjSection = find(MjmlPreview, { type: MODEL_CONSTANT.TYPE_SECTION }).model

const columnsCreate = map([1, 2, 3], nb => {
    return {
        active: true,
        type: MODEL_CONSTANT.TYPE_SECTION,
        component: MjCreateSection,
        props: { nbColumn: nb, icon: ColumnSVG, name: `${nb} Columns` },
        params: {
            type: MODEL_CONSTANT.TYPE_SECTION,
            createNbColumn: nb,
            typeColumn: MODEL_CONSTANT.TYPE_COLUMN,
            attributes: new MjSection().getAttributes()
        }
    }
})

export default columnsCreate
