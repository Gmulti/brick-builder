import Schema from "./index"

describe('Border Detail Schema', function () {
    beforeEach(() => {
        this.data = {
            "border-color": {
                rgb: {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                },
                hex: "#ffffff"
            },
            "border-style" : "solid",
            "border-width" : {
                type : "px",
                value: 100
            }
        }
    })

    describe('No values', () => {
        test('Border color', () => {

            let results = Schema["border-color"]({})

            expect(results).toBeNull();
        });

        test('Border style', () => {

            let results = Schema["border-style"]({})

            expect(results).toBeNull();
        });

        test('Border width', () => {

            let results = Schema["border-width"]({})

            expect(results).toBeNull();
        });
    })
    describe('With values', () => {
        test('Border color', () => {
            let desiredResult = '#ffffff'

            let results = Schema["border-color"](this.data)

            expect(results).toEqual(desiredResult);
        });

        test('Border style', () => {
            let desiredResult = 'solid'

            let results = Schema["border-style"](this.data)

            expect(results).toEqual(desiredResult);
        });

        test('Border width', () => {
            let desiredResult = '100px'

            let results = Schema["border-width"](this.data)

            expect(results).toEqual(desiredResult);
        });

    })

});
