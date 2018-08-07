import * as _ from "lodash"
import Schema from "./index"
import MjSection from "../index"

describe('MjModels MjSection', function () {
    beforeEach(() => {
        this.data = new MjSection()
        
        this.data.attributes = {
            "background-color": {
                rgb: {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                },
                hex: "#ffffff"
            }
        }
    })
    
    describe('Morphism schema', () => {
        test('Default values', () => {
            let desiredResult = { 
                'background-color': null,
            }

            let results = Schema.mjmlObject.attributes.fn({}, new MjSection())

            expect(results).toMatchObject(desiredResult);
        });

        test('unit', () => {
            let desiredResult = { 
                'background-color': '#ffffff',
            }

            let results = Schema.mjmlObject.attributes.fn(this.data.getAttributes(), this.data)

            expect(results).toMatchObject(desiredResult);
        });

    })

});
