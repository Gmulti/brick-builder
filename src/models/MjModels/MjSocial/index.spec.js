import * as _ from "lodash"
import MjSocial from './index'
import DEFAULT_ATTRIBUTES  from './DefaultAttributes'

describe('MjSocial', function () {
   
    describe('Structural', () => {
        test('init', () => {
            let mjSocial = new MjSocial()
            
            let desiredResult = {
                tagName : "mj-social",
                defaultAttributes: DEFAULT_ATTRIBUTES
            };

            expect(mjSocial).toMatchObject(desiredResult);
        });

        test('type', () => {
            
            let desiredResult = 5

            expect(MjSocial.type).toEqual(desiredResult);
        });
    });

});
