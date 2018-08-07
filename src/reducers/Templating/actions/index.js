import { traits } from 'traits-decorator'
import { DND, Templating } from '../../../lib'

@traits(DND.Reducers.TemplatingActions)
@traits(Templating.Reducers.TemplatingActions)
class TemplatingAction {}

export default new TemplatingAction()
