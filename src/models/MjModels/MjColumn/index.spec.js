import * as _ from "lodash"
import MjColumn from './index'

describe('MjColumn', function () {
   
    describe('Structural', () => {
        
        test('init MjColumn', () => {
            let mjColumn = new MjColumn()
            
            let desiredResult = {
                tagName : "mj-column"
            };

            expect(mjColumn).toMatchObject(desiredResult);
        });

        test('type', () => {
            
            let desiredResult = 100

            expect(MjColumn.type).toEqual(desiredResult);
        });
    
    });

});
