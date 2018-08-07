import reducer from './index'
import * as CONSTANT from './actions/constant'
import * as _ from 'lodash'
import initialState from './initialState'

describe('Templating reducer', function() {
    beforeEach(() => {
        this.dataToCrunch = {
            sections: [
                {
                    key: 1,
                    order: 1,
                    attributes: {
                        'background-color': {
                            rgb: {
                                r: 255,
                                g: 255,
                                b: 255,
                                a: 1
                            },
                            hex: '#ffffff'
                        }
                    }
                },
                {
                    key: 2,
                    order: 2,
                    attributes: {
                        'background-color': {
                            rgb: {
                                r: 255,
                                g: 0,
                                b: 255,
                                a: 1
                            },
                            hex: '#ff00ff'
                        }
                    }
                }
            ],
            columns: [
                {
                    keySection: 1,
                    order: 1,
                    key: 1,
                    attributes: {
                        'background-color': {
                            rgb: {
                                r: 255,
                                g: 255,
                                b: 255,
                                a: 1
                            },
                            hex: '#ffffff'
                        }
                    }
                },
                {
                    keySection: 2,
                    order: 1,
                    key: 2,
                    attributes: {
                        'background-color': {
                            rgb: {
                                r: 255,
                                g: 0,
                                b: 0,
                                a: 1
                            },
                            hex: '#ff0000'
                        }
                    }
                }
            ],
            components: [
                {
                    type: 1,
                    key: 1,
                    keySection: 1,
                    keyColumn: 1,
                    order: 1,
                    attributes: {
                        'border-color': {
                            rgb: {
                                r: 255,
                                g: 255,
                                b: 255,
                                a: 1
                            },
                            hex: '#ffffff'
                        }
                    }
                },
                {
                    type: 1,
                    key: 2,
                    keySection: 2,
                    keyColumn: 2,
                    order: 0,
                    attributes: {
                        'border-color': {
                            rgb: {
                                r: 255,
                                g: 255,
                                b: 255,
                                a: 1
                            },
                            hex: '#ffffff'
                        }
                    }
                }
            ]
        }
    })

    describe('Delete', () => {
        test('Section', () => {
            const payload = {
                key: 1
            }

            let action = {
                type: CONSTANT.DELETE_SECTION,
                payload: payload
            }

            let result = reducer(this.dataToCrunch, action)

            expect(result.sections.length).toEqual(1)
        })

        test('Column', () => {
            const payload = {
                key: 1
            }

            let action = {
                type: CONSTANT.DELETE_COLUMN,
                payload: payload
            }

            let result = reducer(this.dataToCrunch, action)

            expect(result.columns.length).toEqual(1)
        })

        test('Component', () => {
            const payload = {
                key: 1
            }

            let action = {
                type: CONSTANT.DELETE_COMPONENT,
                payload: payload
            }

            let result = reducer(this.dataToCrunch, action)

            expect(result.components.length).toEqual(1)
        })

        test('should return the initial state', function() {
            let result = reducer(initialState, {})

            expect(result).toMatchObject(initialState)
        })

        describe('Update item', function() {
            test('should handle UPDATE_SECTION', function() {
                let action = {
                    type: CONSTANT.UPDATE_SECTION,
                    payload: {
                        key: 1,
                        order: 2,
                        attributes: {
                            'border-radius': {
                                type: 'px',
                                value: 4
                            }
                        }
                    }
                }

                let result = reducer(initialState, action)
                let desiredResult = {
                    'background-color': {
                        rgb: { r: 0, g: 255, b: 0, a: 1 },
                        hex: '#00FF00'
                    },
                    'border-radius': {
                        type: 'px',
                        value: 4
                    }
                }

                const drop = _.find(result.sections, { key: 1, order: 2 })

                expect(drop.attributes).toMatchObject(desiredResult)
            })

            test('should handle UPDATE_COLUMN', function() {
                let action = {
                    type: CONSTANT.UPDATE_COLUMN,
                    payload: {
                        key: 1,
                        keySection: 1,
                        order: 0,
                        attributes: {
                            'border-radius': {
                                type: 'px',
                                value: 4
                            }
                        }
                    }
                }

                let result = reducer(initialState, action)

                let desiredResult = {
                    width: {
                        type: '%',
                        value: 60
                    },
                    'background-color': {
                        rgb: { r: 255, g: 255, b: 0, a: 1 },
                        hex: '#FFFF00'
                    },
                    'border-radius': { type: 'px', value: 4 }
                }

                const drop = _.find(result.columns, {
                    keySection: 1,
                    key: 1,
                    order: 0
                })

                expect(drop.attributes).toMatchObject(desiredResult)
            })

            test('should handle UPDATE_COMPONENT', function() {
                let action = {
                    type: CONSTANT.UPDATE_COMPONENT,
                    payload: {
                        key: 2,
                        keySection: 1,
                        keyColumn: 2,
                        order: 0,
                        attributes: {
                            'border-radius': {
                                type: 'px',
                                value: 4
                            }
                        }
                    }
                }

                let result = reducer(initialState, action)

                let desiredResult = {
                    width: {
                        type: '%',
                        value: 50
                    },
                    'border-radius': { type: 'px', value: 4 }
                }

                const drop = _.find(result.columns, {
                    keySection: 1,
                    key: 2,
                    order: 0,
                    keyColumn: 2
                })

                expect(result.components[0].attributes).toMatchObject(
                    desiredResult
                )
            })
        })

        describe('Update position section', function() {
            test('should handle UPDATE_SECTION_POSITION with before', function(done) {
                const payload = {
                    before: true,
                    after: false,
                    dropOrder: 0,
                    order: 2
                }

                let action = {
                    type: 'UPDATE_SECTION_POSITION',
                    payload: payload
                }

                let result = reducer(initialState, action)
                let desiredResult = {
                    'background-color': {
                        rgb: { r: 255, g: 0, b: 0, a: 1 },
                        hex: '#FF0000'
                    }
                }

                const drop = _.find(result.sections, {
                    order: payload.dropOrder
                })

                expect(drop.attributes).toMatchObject(desiredResult)
                done()
            })

            test('should handle UPDATE_SECTION_POSITION with after', function(done) {
                const payload = {
                    before: false,
                    after: true,
                    dropOrder: 0,
                    order: 2
                }

                let action = {
                    type: 'UPDATE_SECTION_POSITION',
                    payload: payload
                }

                let result = reducer(initialState, action)

                let desiredResult = {
                    'background-color': {
                        rgb: { r: 255, g: 0, b: 0, a: 1 },
                        hex: '#FF0000'
                    }
                }

                const drop = _.find(result.sections, {
                    order: payload.dropOrder + 1
                })

                expect(drop.attributes).toMatchObject(desiredResult)
                done()
            })
        })

        describe('Update position columns', () => {
            test('should handle UPDATE_COLUMN_POSITION with before', function(done) {
                const payload = {
                    before: true,
                    after: false,
                    dropSection: 1,
                    keySection: 1,
                    dropOrder: 1,
                    order: 0
                }

                let action = {
                    type: 'UPDATE_COLUMN_POSITION',
                    payload: payload
                }

                let result = reducer(initialState, action)

                let desiredResult = {
                    'background-color': {
                        hex: '#00FFFF',
                        rgb: { a: 1, b: 255, g: 255, r: 0 }
                    },
                    width: { type: '%', value: 40 }
                }

                const drop = _.find(result.columns, {
                    keySection: payload.dropSection,
                    order: payload.dropOrder
                })

                expect(drop.attributes).toMatchObject(desiredResult)
                done()
            })
        })
    })
})
