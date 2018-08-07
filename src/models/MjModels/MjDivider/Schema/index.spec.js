import * as _ from "lodash"
import Schema from "./index"
import MjDivider from "../index"

describe('MjModels MjDivider', function () {
    beforeEach(() => {
        this.data = new MjDivider()
        
        this.data.attributes = {
            "border-color": {
                rgb: {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                },
                hex: "#ffffff"
            },
            "border-width" : {
                type: "px",
                value: "100"
            }
        }
    })
    
    describe('Morphism schema', () => {
        test('Default values', () => {
            let desiredResult = { 
                'border-style': "solid",
                'width' : "100%"
            }

            let results = Schema.mjmlObject.attributes.fn({}, new MjDivider())

            expect(results).toMatchObject(desiredResult);
        });

        test('unit', () => {
            let desiredResult = { 
                'border-color': '#ffffff',
                'border-width' : "100px"
            }

            let results = Schema.mjmlObject.attributes.fn(this.data.getAttributes(), this.data)

            expect(results).toMatchObject(desiredResult);
        });

    })

});
