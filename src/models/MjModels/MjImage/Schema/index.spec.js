import * as _ from "lodash"
import Schema from "./index"
import MjImage from "../index"

describe('MjModels MjImage', function () {
    beforeEach(() => {
        this.data = new MjImage()
        
        this.data.attributes = {
            "container-background-color": {
                rgb: {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                },
                hex: "#ffffff"
            },
            width : {
                type: "px",
                value: "100"
            }
        }
    })
    
    describe('Morphism schema', () => {
        test('Default values', () => {
            let desiredResult = { 
                'container-background-color': null,
                href: "",
                align: "center",
                width: null
            }

            let results = Schema.mjmlObject.attributes.fn({}, new MjImage())

            expect(results).toMatchObject(desiredResult);
        });

        test('unit', () => {
            let desiredResult = { 
                'container-background-color': '#ffffff',
                width : "100px"
            }

            let results = Schema.mjmlObject.attributes.fn(this.data.getAttributes(), this.data)

            expect(results).toMatchObject(desiredResult);
        });

    })

});
