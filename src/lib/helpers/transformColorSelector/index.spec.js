import transformColorSelector from "./index"
import * as _ from "lodash"

describe('transformColorSelector', function () {
    beforeEach(() => {
        this.data = {
            rgb: {
                r: "255",
                g: "255",
                b: "255",
                a: 0
            },
            hex: "#ffffff"
        }
    })
    
    describe('Structural', () => {
        test("should be a function", () => {
            expect(typeof transformColorSelector).toBe('function')
        })
    })

    describe('Transform', () => {
        test('by type default', () => {

            let desiredResult = "rgba(255, 255, 255, 0)"

            expect(transformColorSelector(this.data, "rgb")).toEqual(desiredResult);
        });

        test('by type hex', () => {

            let desiredResult = "#ffffff"

            expect(transformColorSelector(this.data, "hex")).toEqual(desiredResult);
        });

        test('by type with nothing', () => {

            let desiredResult = _.clone(this.data)

            expect(transformColorSelector(this.data, "other")).toEqual(desiredResult);
        });
    })

});
