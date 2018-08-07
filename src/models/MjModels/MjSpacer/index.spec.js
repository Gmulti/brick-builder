import * as _ from "lodash"
import MjSpacer from './index'
import DEFAULT_ATTRIBUTES  from './DefaultAttributes'

describe('MjSpacer', function () {
   
    describe('Structural', () => {
        test('init', () => {
            let mjSpacer = new MjSpacer()
            
            let desiredResult = {
                tagName : "mj-spacer",
                defaultAttributes: DEFAULT_ATTRIBUTES
            };

            expect(mjSpacer).toMatchObject(desiredResult);
        });

        test('type', () => {
            
            let desiredResult = 4

            expect(MjSpacer.type).toEqual(desiredResult);
        });
    });

});
