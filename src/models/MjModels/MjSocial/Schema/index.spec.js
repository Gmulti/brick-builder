import * as _ from "lodash"
import Schema from "./index"
import MjSocial from "../index"

describe('MjModels MjSocial', function () {
    beforeEach(() => {
        this.data = new MjSocial()

        this.data.attributes = {
            "facebook-icon-color": {
                rgb: {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                },
                hex: "#ffffff"
            },
            "twitter-icon-color": {
                rgb: {
                    r: 255,
                    g: 0,
                    b: 255,
                    a: 1
                },
                hex: "#ff00ff"
            }
        }
    })
    
    describe('Morphism schema', () => {
        test('unit', () => {
            let desiredResult = { 
                'facebook-icon-color': '#ffffff',
                'twitter-icon-color': '#ff00ff',
                'google-icon-color': null,
                'instagram-icon-color': null,
                'linkedin-icon-color': null,
                'pinterest-icon-color': null,
                'container-background-color': null 
            }
            
            let results = Schema.mjmlObject.attributes.fn(this.data.getAttributes(), this.data)

            expect(results).toMatchObject(desiredResult);
        });

    })

});
