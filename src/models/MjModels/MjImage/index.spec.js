import * as _ from "lodash"
import MjImage from './index'
import DEFAULT_ATTRIBUTES  from './DefaultAttributes'

describe('MjImage', function () {
   
    describe('Structural', () => {
        test('init', () => {
            let mjImage = new MjImage()
            
            let desiredResult = {
                tagName : "mj-image",
                defaultAttributes: DEFAULT_ATTRIBUTES
            };

            expect(mjImage).toMatchObject(desiredResult);
        });

        test('type', () => {
            
            let desiredResult = 3

            expect(MjImage.type).toEqual(desiredResult);
        });
    });

});
