import constructStructureTemplating from './index'
import * as STRUCTURE_CONSTANT from '../../lib/components/models/constant'
describe('constructStructureTemplating', function() {
    beforeEach(() => {
        this.dataToCrunch = {
            sections: [
                {
                    key: 1,
                    order: 1,
                    type: STRUCTURE_CONSTANT.TYPE_SECTION,
                    attributes: {
                        'background-color': {
                            rgb: { r: 255, g: 255, b: 255, a: 1 },
                            hex: '#ffffff'
                        }
                    }
                },
                {
                    key: 0,
                    order: 0,
                    type: STRUCTURE_CONSTANT.TYPE_SECTION,
                    attributes: {
                        'background-color': {
                            rgb: { r: 255, g: 0, b: 255, a: 1 },
                            hex: '#ff00ff'
                        }
                    }
                }
            ],
            columns: [
                {
                    keySection: 0,
                    order: 1,
                    key: 1,
                    type: STRUCTURE_CONSTANT.TYPE_COLUMN,
                    attributes: {
                        'background-color': {
                            rgb: { r: 255, g: 255, b: 255, a: 1 },
                            hex: '#ffffff'
                        }
                    }
                },
                {
                    keySection: 0,
                    order: 0,
                    key: 0,
                    type: STRUCTURE_CONSTANT.TYPE_COLUMN,
                    attributes: {
                        'background-color': {
                            rgb: { r: 255, g: 0, b: 0, a: 1 },
                            hex: '#ff0000'
                        }
                    }
                },
                {
                    keySection: 1,
                    order: 0,
                    key: 0,
                    type: STRUCTURE_CONSTANT.TYPE_COLUMN,
                    attributes: {
                        'background-color': {
                            rgb: { r: 255, g: 0, b: 255, a: 1 },
                            hex: '#ff00ff'
                        }
                    }
                }
            ],
            components: [
                {
                    type: 1,
                    key: 1,
                    keySection: 0,
                    keyColumn: 0,
                    order: 1,
                    attributes: {
                        'border-color': {
                            rgb: { r: 255, g: 255, b: 255, a: 1 },
                            hex: '#ffffff'
                        }
                    }
                },
                {
                    type: 1,
                    key: 2,
                    keySection: 0,
                    keyColumn: 0,
                    order: 0,
                    attributes: {
                        'border-color': {
                            rgb: { r: 255, g: 255, b: 255, a: 1 },
                            hex: '#ffffff'
                        }
                    }
                },
                {
                    type: 1,
                    key: 3,
                    keySection: 0,
                    keyColumn: 1,
                    order: 0,
                    attributes: {
                        'border-color': {
                            rgb: { r: 255, g: 255, b: 255, a: 1 },
                            hex: '#ffffff'
                        }
                    }
                }
            ]
        }
    })

    describe('Structural', () => {
        test('should export constructStructureTemplating function curried function', () => {
            expect(typeof constructStructureTemplating).toBe('function')
        })
    })

    describe('Functions', () => {
        test('number rows', () => {
            let results = constructStructureTemplating(this.dataToCrunch)

            expect(results.length).toEqual(2)
        })

        test('number columns in rows', () => {
            let results = constructStructureTemplating(this.dataToCrunch)

            expect(results[0].columns.length).toEqual(2)
            expect(results[1].columns.length).toEqual(1)
        })

        test('number components in columns', () => {
            let results = constructStructureTemplating(this.dataToCrunch)

            expect(results[0].columns[0].components.length).toEqual(2)
            expect(results[0].columns[1].components.length).toEqual(1)
            expect(results[1].columns[0].components.length).toEqual(0)
        })
    })
})
