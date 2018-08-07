import { traits } from "traits-decorator"
import { Settings } from "../../../lib"

@traits(Settings.Reducers.AppActions)
class AppAction {}

export default new AppAction()
