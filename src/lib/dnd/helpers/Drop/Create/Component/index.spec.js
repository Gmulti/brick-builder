import React from 'react';
import ReactDOM from 'react-dom';
import CreateComponent from './index'

describe('CreateComponent', function () {
    beforeEach(() => {
        this.payload = {
            before: true,
            after: false,
            attributes: {
                "border-color": {
                    rgb:  {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 1
                    },
                    hex: "#ffffff"
                }
            }
        }

        this.keySection = 1
        this.keyColumn  = 2
    });

    test('create component with payload', () => {

        const result = CreateComponent(this.keySection, this.keyColumn, this.payload)

        let desiredResult = {
            keySection : this.keySection,
            keyColumn : this.keyColumn,
            ...this.payload
        };

        expect(result).toMatchObject(desiredResult);
    });

});
