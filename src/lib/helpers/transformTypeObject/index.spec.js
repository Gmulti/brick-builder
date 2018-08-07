import transformTypeObject from "./index"
import * as _ from "lodash"

describe('transformTypeObject', function () {
    beforeEach(() => {
        this.data = {
            value : 50,
            type : "%"
        }
    })
    
    describe('Structural', () => {
        test("should be a function", () => {
            expect(typeof transformTypeObject).toBe('function')
        })
    })

    describe('Transform', () => {
        test('by type default', () => {

            let desiredResult = "50%"

            expect(transformTypeObject(this.data)).toEqual(desiredResult);
        });

    
    })

});
