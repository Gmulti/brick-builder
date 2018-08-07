import Schema from "./index"

describe('Height Schema', function () {
    beforeEach(() => {
        this.data = {
            height: {
                type: "px",
                value: 400
            }
        }
    })

    describe('No values', () => {
        test('Border color', () => {

            let results = Schema["height"]({})

            expect(results).toBeNull();
        });

    })
    describe('With values', () => {
        test('Border color', () => {
            let desiredResult = '400px'

            let results = Schema["height"](this.data)

            expect(results).toEqual(desiredResult);
        });

    })

});
