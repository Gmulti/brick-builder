import Schema from "./index"

describe('Container Backgorund Color Schema', function () {
    beforeEach(() => {
        this.data = {
            "container-background-color": {
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

    describe('No values', () => {
        test('Border color', () => {

            let results = Schema["container-background-color"]({})

            expect(results).toBeNull();
        });

    })
    describe('With values', () => {
        test('Border color', () => {
            let desiredResult = '#ffffff'

            let results = Schema["container-background-color"](this.data)

            expect(results).toEqual(desiredResult);
        });

    })

});
