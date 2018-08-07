import * as MJ_CONSTANT from '../../../components/models/constant'
import * as MJ_COMPONENT from '../../../../models/MjModels/constant'

export default {
    container: {
        type: MJ_CONSTANT.TYPE_CONTAINER,
        attributes: {}
    },
    sections: [
        {
            key: 1,
            order: 2,
            type: MJ_CONSTANT.TYPE_SECTION,
            attributes: {
                'full-width': true,
                'background-color': {
                    rgb: {
                        r: 0,
                        g: 255,
                        b: 0,
                        a: 1
                    },
                    hex: '#00FF00'
                }
            }
        },
        {
            key: 2,
            order: 1,
            type: MJ_CONSTANT.TYPE_SECTION,
            attributes: {
                'background-color': {
                    rgb: {
                        r: 255,
                        g: 0,
                        b: 0,
                        a: 1
                    },
                    hex: '#FF0000'
                }
            }
        },
        {
            key: 3,
            order: 0,
            type: MJ_CONSTANT.TYPE_SECTION,
            attributes: {
                'background-color': {
                    rgb: {
                        r: 255,
                        g: 0,
                        b: 0,
                        a: 1
                    },
                    hex: '#FF0000'
                }
            }
        },
        {
            key: 4,
            order: 3,
            type: MJ_CONSTANT.TYPE_SECTION,
            attributes: {
                'background-color': {
                    rgb: {
                        r: 0,
                        g: 0,
                        b: 255,
                        a: 1
                    },
                    hex: '#0000FF'
                }
            }
        }
    ],
    columns: [
        {
            key: 1,
            keySection: 1,
            order: 0,
            type: MJ_CONSTANT.TYPE_COLUMN,
            attributes: {
                width: {
                    type: '%',
                    value: 60
                },
                'background-color': {
                    rgb: {
                        r: 255,
                        g: 255,
                        b: 0,
                        a: 1
                    },
                    hex: '#FFFF00'
                }
            }
        },
        {
            key: 2,
            keySection: 1,
            order: 1,
            type: MJ_CONSTANT.TYPE_COLUMN,
            attributes: {
                width: {
                    type: '%',
                    value: 40
                },
                'background-color': {
                    rgb: {
                        r: 0,
                        g: 255,
                        b: 255,
                        a: 1
                    },
                    hex: '#00FFFF'
                }
            }
        },
        {
            key: 3,
            keySection: 2,
            order: 0,
            type: MJ_CONSTANT.TYPE_COLUMN,
            attributes: {
                width: {
                    type: '%',
                    value: 100
                },
                'background-color': {
                    rgb: {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 1
                    },
                    hex: '#FFFFFF'
                }
            }
        },
        {
            key: 4,
            keySection: 3,
            order: 0,
            type: MJ_CONSTANT.TYPE_COLUMN,
            attributes: {
                width: {
                    type: '%',
                    value: 100
                },
                'background-color': {
                    rgb: {
                        r: 255,
                        g: 0,
                        b: 255,
                        a: 1
                    },
                    hex: '#FF00FF'
                }
            }
        }
    ],
    components: [
        {
            key: 2,
            type: MJ_COMPONENT.TYPE_MJ_DIVIDER,
            keySection: 1,
            keyColumn: 2,
            order: 0,
            attributes: {
                'border-color': {
                    rgb: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 1
                    },
                    hex: '#000000'
                },
                width: {
                    type: '%',
                    value: 50
                },
                'border-style': 'solid',
                'border-width': {
                    type: 'px',
                    value: 1
                }
            }
        },
        {
            key: 3,
            type: MJ_COMPONENT.TYPE_MJ_TEXT,
            keySection: 1,
            keyColumn: 2,
            order: 2,
            content: '<h1>Text H1</h1>',
            attributes: {}
        },
        {
            key: 4,
            type: MJ_COMPONENT.TYPE_MJ_TEXT,
            keySection: 2,
            keyColumn: 3,
            order: 0,
            content: '<h2>Text H2</h2>',
            attributes: {}
        },
        {
            key: 5,
            type: MJ_COMPONENT.TYPE_MJ_TEXT,
            keySection: 3,
            keyColumn: 4,
            order: 0,
            content: '<h3>Text H3</h3>',
            attributes: {}
        },
        {
            key: 6,
            type: MJ_COMPONENT.TYPE_MJ_IMAGE,
            keySection: 1,
            keyColumn: 2,
            order: 1,
            attributes: {
                width: {
                    type: 'px',
                    value: 300
                },
                src: 'https://placeimg.com/300/300/any'
            }
        }
    ]
}
