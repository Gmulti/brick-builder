import BackgroundColor from './Styles/BackgroundColor'
import FontSize from './Styles/FontSize'
import BorderWidth from './Styles/BorderWidth'
import BorderStyle from './Styles/BorderStyle'
import BorderColor from './Styles/BorderColor'
import Border from './Styles/Border'
import Width from './Styles/Width'
import Color from './Styles/Color'
import Padding from './Styles/Padding'
import BorderRadius from './Styles/BorderRadius'
import TextAlign from './Styles/TextAlign'
import GroupeName from './GroupName'
import ImportButton from './Import'

export const GROUP_NAME = 'GROUP_NAME'
export const BACKGROUND_COLOR = 'BACKGROUND_COLOR'
export const FONT_SIZE = 'FONT_SIZE'
export const BORDER_WIDTH = 'BORDER_WIDTH'
export const BORDER_STYLE = 'BORDER_STYLE'
export const BORDER_COLOR = 'BORDER_COLOR'
export const BORDER = 'BORDER'
export const WIDTH = 'WIDTH'
export const COLOR = 'COLOR'
export const PADDING = 'PADDING'
export const BORDER_RADIUS = 'BORDER_RADIUS'
export const TEXT_ALIGN = 'TEXT_ALIGN'
export const IMPORT_BUTTON = 'IMPORT_BUTTON'

export default [
    {
        type: IMPORT_BUTTON,
        component: ImportButton
    },
    {
        type: GROUP_NAME,
        component: GroupeName
    },
    {
        type: BACKGROUND_COLOR,
        component: BackgroundColor
    },
    {
        type: FONT_SIZE,
        component: FontSize
    },
    {
        type: BORDER_WIDTH,
        component: BorderWidth
    },
    {
        type: BORDER_STYLE,
        component: BorderStyle
    },
    {
        type: BORDER_COLOR,
        component: BorderColor
    },
    {
        type: BORDER,
        component: Border
    },
    {
        type: WIDTH,
        component: Width
    },
    {
        type: COLOR,
        component: Color
    },
    {
        type: PADDING,
        component: Padding
    },
    {
        type: BORDER_RADIUS,
        component: BorderRadius
    },
    {
        type: TEXT_ALIGN,
        component: TextAlign
    }
]
