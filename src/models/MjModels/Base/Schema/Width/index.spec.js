import Schema from "./index"

describe('Width Schema', function () {
    beforeEach(() => {
        this.data = {
            width: {
                type: "px",
                value: 400
            }
        }
    })

    describe('No values', () => {
        test('Border color', () => {

            let results = Schema["width"]({})

            expect(results).toBeNull();
        });

    })
    describe('With values', () => {
        test('Border color', () => {
            let desiredResult = '400px'

            let results = Schema["width"](this.data)

            expect(results).toEqual(desiredResult);
        });

    })

});
