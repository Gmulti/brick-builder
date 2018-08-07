import * as MJ_CONSTANT from '../../models/MjModels/constant'
import * as MODEL_CONSTANT from '../../lib/components/models/constant'

export default {
    container: {
        type: MODEL_CONSTANT.TYPE_CONTAINER,
        attributes: {
            'background-color': {
                rgb: {
                    r: 225,
                    g: 232,
                    b: 237,
                    a: 1
                },
                hex: '#E1E8ED'
            }
        }
    },
    sections: [
        {
            key: 1,
            order: 1,
            type: MODEL_CONSTANT.TYPE_SECTION,
            attributes: {
                'full-width': false,
                'background-color': {
                    rgb: {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 1
                    },
                    hex: '#ffffff'
                },
                'padding-top': {
                    type: 'px',
                    value: 0
                },
                'padding-bottom': {
                    type: 'px',
                    value: 0
                }
            }
        },
        {
            key: 2,
            order: 2,
            type: MODEL_CONSTANT.TYPE_SECTION,
            attributes: {
                'full-width': false,
                'background-color': {
                    hex: '#fcfcfc',
                    rgb: {
                        r: 252,
                        g: 252,
                        b: 252,
                        a: 1
                    }
                },
                'padding-top': {
                    type: 'px',
                    value: 0
                },
                'padding-bottom': {
                    type: 'px',
                    value: 0
                }
            }
        },
        {
            key: 3,
            order: 3,
            type: MODEL_CONSTANT.TYPE_SECTION,
            attributes: {
                'full-width': false,
                'background-color': {
                    hex: '#ffffff',
                    rgb: {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 1
                    }
                },
                'padding-bottom': {
                    type: 'px',
                    value: 0
                },
                'padding-left': {
                    type: 'px',
                    value: 60
                },
                'padding-right': {
                    type: 'px',
                    value: 60
                }
            }
        },
        {
            key: 4,
            order: 4,
            type: MODEL_CONSTANT.TYPE_SECTION,
            attributes: {
                'full-width': false,
                'background-color': {
                    hex: '#f3f3f3',
                    rgb: {
                        r: 243,
                        g: 243,
                        b: 243,
                        a: 1
                    }
                },
                'padding-bottom': {
                    type: 'px',
                    value: 0
                }
            }
        }
    ],
    columns: [
        {
            key: 1,
            keySection: 1,
            order: 1,
            type: MODEL_CONSTANT.TYPE_COLUMN,
            attributes: {
                width: {
                    type: 'px',
                    value: 600
                }
            }
        },
        {
            key: 2,
            keySection: 2,
            order: 1,
            type: MODEL_CONSTANT.TYPE_COLUMN,
            attributes: {
                width: {
                    type: '%',
                    value: 100
                }
            }
        },
        {
            key: 3,
            keySection: 3,
            order: 1,
            type: MODEL_CONSTANT.TYPE_COLUMN,
            attributes: {
                width: {
                    type: 'px',
                    value: 130
                }
            }
        },
        {
            key: 4,
            keySection: 3,
            order: 2,
            type: MODEL_CONSTANT.TYPE_COLUMN,
            attributes: {
                width: {
                    type: 'px',
                    value: 350
                }
            }
        },
        {
            key: 5,
            keySection: 4,
            order: 1,
            type: MODEL_CONSTANT.TYPE_COLUMN
        }
    ],
    components: [
        {
            key: 1,
            type: MJ_CONSTANT.TYPE_MJ_IMAGE,
            keySection: 1,
            keyColumn: 1,
            order: 1,
            attributes: {
                width: {
                    value: 50,
                    type: 'px'
                },
                src:
                    'https://avatars0.githubusercontent.com/u/16115896?v=3&s=200'
            }
        },
        {
            key: 2,
            type: MJ_CONSTANT.TYPE_MJ_DIVIDER,
            keySection: 1,
            keyColumn: 1,
            order: 2,
            attributes: {
                'border-style': 'solid',
                'border-width': {
                    type: 'px',
                    value: 1
                },
                'border-color': {
                    hex: '#f8f8f8',
                    rgb: {
                        r: 248,
                        g: 248,
                        b: 248,
                        a: 1
                    }
                },
                'padding-bottom': {
                    type: 'px',
                    value: 0
                },
                'padding-left': {
                    type: 'px',
                    value: 0
                },
                'padding-right': {
                    type: 'px',
                    value: 0
                },
                'padding-top': {
                    type: 'px',
                    value: 20
                }
            }
        },
        {
            key: 3,
            type: MJ_CONSTANT.TYPE_MJ_TEXT,
            keySection: 2,
            keyColumn: 2,
            order: 1,
            attributes: {
                align: 'center',
                'font-size': {
                    type: 'px',
                    value: 20
                },
                color: {
                    hex: '#792727',
                    rgb: {
                        r: 121,
                        g: 39,
                        b: 39,
                        a: 1
                    }
                },
                'font-family': 'Ubuntu',
                'font-weight': 200
            },
            content: "Here is what you've missed"
        },
        {
            key: 4,
            type: MJ_CONSTANT.TYPE_MJ_DIVIDER,
            keySection: 2,
            keyColumn: 2,
            order: 2,
            attributes: {
                'border-width': {
                    type: 'px',
                    value: 1
                },
                'border-color': {
                    hex: '#f8f8f8',
                    rgb: {
                        r: 248,
                        g: 248,
                        b: 248,
                        a: 1
                    }
                },
                'padding-bottom': {
                    type: 'px',
                    value: 0
                },
                'padding-left': {
                    type: 'px',
                    value: 0
                },
                'padding-right': {
                    type: 'px',
                    value: 0
                },
                'padding-top': {
                    type: 'px',
                    value: 0
                }
            }
        },
        {
            key: 5,
            type: MJ_CONSTANT.TYPE_MJ_IMAGE,
            keySection: 3,
            keyColumn: 3,
            order: 1,
            attributes: {
                width: {
                    value: 100,
                    type: 'px'
                },
                src: 'https://mjml.io/assets/img/responsive.png'
            }
        },
        {
            key: 6,
            type: MJ_CONSTANT.TYPE_MJ_TEXT,
            keySection: 3,
            keyColumn: 4,
            order: 2,
            content: 'Sed ut perspiciatis',
            attributes: {
                'font-size': {
                    value: 20,
                    type: 'px'
                },
                color: {
                    hex: '#792727',
                    rgb: {
                        r: 121,
                        g: 39,
                        b: 39,
                        a: 1
                    }
                }
            }
        },
        {
            key: 7,
            type: MJ_CONSTANT.TYPE_MJ_TEXT,
            keySection: 3,
            keyColumn: 4,
            order: 3,
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            attributes: {
                color: {
                    hex: '#000000',
                    rgb: {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 1
                    }
                }
            }
        },
        {
            key: 8,
            type: MJ_CONSTANT.TYPE_MJ_TEXT,
            keySection: 4,
            keyColumn: 5,
            order: 1,
            content: 'Explore our new features',
            attributes: {
                color: {
                    hex: '#792727',
                    rgb: {
                        r: 121,
                        g: 39,
                        b: 39,
                        a: 1
                    }
                },
                'font-size': {
                    type: 'px',
                    value: 20
                }
            }
        },
        {
            key: 9,
            type: MJ_CONSTANT.TYPE_MJ_IMAGE,
            keySection: 4,
            keyColumn: 5,
            order: 2,
            attributes: {
                width: {
                    value: 600,
                    type: 'px'
                },
                src:
                    'https://cloud.githubusercontent.com/assets/6558790/12450760/ee034178-bf85-11e5-9dda-98d0c8f9f8d6.png'
            }
        }
    ]
}
