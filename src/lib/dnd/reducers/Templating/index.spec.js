import reducer from './index'
import * as CONSTANT from './actions/constant'
import initialState from "./initialState"
import * as _ from "lodash"

describe('Templating reducer', () => {

    describe('Update position section', function() {
  
        test('should handle UPDATE_SECTION_POSITION with before',  function(done) {
            const payload = {
                before: true,
                after: false,
                dropOrder: 0,
                order: 2
            }

            let action = {
                type : "UPDATE_SECTION_POSITION",
                payload: payload
            }

            let result = reducer(initialState, action)
            let desiredResult = {
                'background-color': { rgb: { r: 0, g: 0, b: 255, a: 1 }, hex: '#0000FF' }
            }

            const drop = _.find(result.sections, {order: payload.dropOrder})

            expect(drop.attributes).toEqual(desiredResult)
            done()

        })

        test('should handle UPDATE_SECTION_POSITION with after',  function(done)  {
            
            const payload = {
                before: false,
                after: true,
                dropOrder: 0,
                order: 2
            }

            let action = {
                type: "UPDATE_SECTION_POSITION",
                payload: payload
            }
            

            let result = reducer(initialState, action)

            let desiredResult = {
                'background-color': { rgb: { r: 0, g: 0, b: 255, a: 1 }, hex: '#0000FF' }
            }

            const drop = _.find(result.sections, {order: payload.dropOrder + 1})
            
            expect(drop.attributes).toEqual(desiredResult)
            done()

        })
    })

    
    describe('Update position columns', () => {

        test('should handle UPDATE_COLUMN_POSITION with before', function (done) {
            const payload = {
                before: true,
                after: false,
                dropSection: 1,
                keySection: 1,
                dropOrder: 0,
                order: 0
            }

            let action = {
                type: "UPDATE_COLUMN_POSITION",
                payload: payload
            }

            let result = reducer(initialState, action)

            let desiredResult = {
                width: {
                    type: "%",
                    value: 60
                }
            }

            const drop = _.find(result.columns, {keySection: payload.dropSection, order: payload.dropOrder})

            expect(drop.attributes).toEqual(desiredResult)
            done()

        })

    })

    describe('Update position componentss', () => {
        test('should handle UPDATE_COMPONENT_POSITION with after', function (done) {
            const payload = {
                before: false,
                after: true,
                dropColumn: 0,
                dropSection: 0,
                dropOrder: 0,
                keySection: 0,
                keyColumn: 1,
                order: 2
            }

            let action = {
                type : "UPDATE_COMPONENT_POSITION",
                payload: payload
            }

            let result = reducer(initialState, action)

            let desiredResult = {
                "border-color": {
                    rgb:  {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 1
                    },
                    hex: "#000000"
                },
                "border-width": {
                    type: "px",
                    value: 1
                }
            }

            const drop = _.find(result.components, { keySection: payload.dropSection, keyColumn: payload.dropColumn, order: payload.dropOrder + 1 })

            expect(drop.attributes).toEqual(desiredResult)
            done()

        })
    })


})