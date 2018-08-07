import * as _ from "lodash"
import Schema from "./index"
import MjSpacer from "../index"
describe('MjModels MjSpacer', function () {
    beforeEach(() => {
        this.data = new MjSpacer()
        
        this.data.attributes = {
            "height": {
                value: 100,
                type:"px"
            }
        }
    })
    
    describe('Morphism schema', () => {
        test('Default values', () => {
            let desiredResult = { 
                'height': "20px",
            }

            let results = Schema.mjmlObject.attributes.fn({}, new MjSpacer())

            expect(results).toEqual(desiredResult);
        });

        test('unit', () => {
            let desiredResult = { 
                'height': '100px',
            }

            let results = Schema.mjmlObject.attributes.fn(this.data.getAttributes(), this.data)

            expect(results).toEqual(desiredResult);
        });

    })

});
