import * as _ from "lodash"
import MjSection from './index'
import expect from "expect"

describe('MjSection', function () {
   
    describe('Structural', () => {
        test('init MjSection', () => {
            let mjSection = new MjSection()
            
            let desiredResult = {
                tagName : "mj-section"
            };
            
            expect(mjSection).toMatchObject(desiredResult);
        });

        test('type MjSection', () => {
            
            let desiredResult = 101

            expect(MjSection.type).toEqual(desiredResult);
        });
    });

});
