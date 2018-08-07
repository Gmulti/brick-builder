import * as _ from "lodash"
import Schema from "./index"
import MjColumn from "../index"

describe('MjModels Schema MjColumn', function () {
    beforeEach(() => {
        this.data = new MjColumn() 
        
        this.data.attributes = {
            "background-color": {
                rgb: {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                },
                hex: "#ffffff"
            },
            "border-radius": {
                type: "px",
                value: "4"
            },
            width : {
                type : "%",
                value : 100
            }
        }
    })

    describe('Morphism schema', () => {
        test('Default values', () => {
            let desiredResult = {
                'border-radius': '0px',
                'background-color': null,
                'vertical-align': "top"
            }

            let results = Schema.mjmlObject.attributes.fn({}, new MjColumn())

            expect(results).toMatchObject(desiredResult);
        });

        test('unit', () => {
            let desiredResult = {
                'background-color': '#ffffff',
                'border-radius': "4px",
                'vertical-align': 'top',
                width: '100%'
            }

            let results = Schema.mjmlObject.attributes.fn(this.data.getAttributes(), this.data)

            expect(results).toMatchObject(desiredResult);
        });

    })

});
