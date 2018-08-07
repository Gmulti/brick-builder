import * as _ from 'lodash'
import Schema from './index'
import MjText from '../index'
describe('MjModels MjText', function() {
    beforeEach(() => {
        this.data = new MjText()

        this.data.attributes = {
            'font-family': 'Arial',
            'line-height': {
                type: '',
                value: '1.5'
            }
        }
    })

    describe('Morphism schema', () => {
        test('Default values', () => {
            let desiredResult = {
                align: undefined,
                color: '#000000',
                'container-background-color': '#ffffff',
                'font-family': 'Arial, Helvetica, Arial, sans-serif',
                'font-size': '13px',
                'font-weight': undefined,
                'line-height': '1.3',
                'padding-bottom': '10px',
                'padding-left': '25px',
                'padding-right': '25px',
                'padding-top': '10px'
            }

            let results = Schema.mjmlObject.attributes.fn({}, new MjText())

            expect(results).toMatchObject(desiredResult)
        })

        test('unit', () => {
            let desiredResult = {
                align: undefined,
                color: '#000000',
                'container-background-color': '#ffffff',
                'font-family': 'Arial, Helvetica, Arial, sans-serif',
                'font-size': '13px',
                'font-weight': undefined,
                'line-height': '1.5',
                'padding-bottom': '10px',
                'padding-left': '25px',
                'padding-right': '25px',
                'padding-top': '10px'
            }

            let results = Schema.mjmlObject.attributes.fn(
                this.data.getAttributes(),
                this.data
            )

            expect(results).toMatchObject(desiredResult)
        })
    })
})
