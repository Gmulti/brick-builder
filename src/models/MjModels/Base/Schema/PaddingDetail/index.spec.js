import Schema from "./index"

describe('Padding Schema', function () {
    beforeEach(() => {
        this.data = {
            "padding-left": {
                type: "px",
                value: 5
            },
            "padding-right": {
                type: "px",
                value: 10
            },
            "padding-top": {
                type: "px",
                value: 15
            },
            "padding-bottom": {
                type: "px",
                value: 20
            },
        }
    })

    describe('No values', () => {
        test('Padding left', () => {

            let results = Schema["padding-left"]({})

            expect(results).toBeNull();
        });
        test('Padding right', () => {

            let results = Schema["padding-right"]({})

            expect(results).toBeNull();
        });
        test('Padding top', () => {

            let results = Schema["padding-top"]({})

            expect(results).toBeNull();
        });
        test('Padding bottom', () => {

            let results = Schema["padding-bottom"]({})

            expect(results).toBeNull();
        });

    })
    describe('With values', () => {
        test('Padding left', () => {
            let desiredResult = '5px'

            let results = Schema["padding-left"](this.data)

            expect(results).toEqual(desiredResult);
        });
        test('Padding right', () => {
            let desiredResult = '10px'

            let results = Schema["padding-right"](this.data)

            expect(results).toEqual(desiredResult);
        });
        test('Padding top', () => {
            let desiredResult = '15px'

            let results = Schema["padding-top"](this.data)

            expect(results).toEqual(desiredResult);
        });
        test('Padding bottom', () => {
            let desiredResult = '20px'

            let results = Schema["padding-bottom"](this.data)

            expect(results).toEqual(desiredResult);
        });

    })

});
