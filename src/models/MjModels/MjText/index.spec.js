import * as _ from "lodash"
import MjText from './index'
import DEFAULT_ATTRIBUTES  from './DefaultAttributes'

describe('MjText', function () {
   
    describe('Structural', () => {
        test('init', () => {
            let mjText = new MjText()
            
            let desiredResult = {
                tagName : "mj-text",
                defaultAttributes : DEFAULT_ATTRIBUTES
            };

            expect(mjText).toMatchObject(desiredResult);
        });

        test('type', () => {
            
            let desiredResult = 2

            expect(MjText.type).toEqual(desiredResult);
        });
    });

});
