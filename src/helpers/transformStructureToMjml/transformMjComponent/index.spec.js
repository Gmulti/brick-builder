import * as _ from "lodash"
import expect, { createSpy, spyOn, isSpy } from "expect"
import MjDivider from "../../../models/MjModels/MjDivider"
import transformMjComponent from "./index"

describe('transformMjComponent', function () {

    describe('Structural', () => {
        test("should be a function", () => {
            expect(typeof transformMjComponent).toBe('function')
        })
    })


});
