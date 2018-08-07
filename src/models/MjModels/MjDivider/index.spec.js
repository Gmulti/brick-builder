import * as _ from "lodash"
import MjDivider from './index'
import DEFAULT_ATTRIBUTES  from './DefaultAttributes'

describe('MjDivider', function () {
   
    describe('Structural', () => {
        test('init', () => {
            let mjDivider = new MjDivider()

            let desiredResult = {
                tagName : "mj-divider",
                defaultAttributes : DEFAULT_ATTRIBUTES
            };


            expect(mjDivider).toMatchObject(desiredResult);
        });

        test('type', () => {
            
            let desiredResult = 1
            
            expect(MjDivider.type).toEqual(desiredResult);
        });
    });

});
