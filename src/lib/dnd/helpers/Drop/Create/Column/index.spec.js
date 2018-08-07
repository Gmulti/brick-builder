import React from 'react';
import ReactDOM from 'react-dom';
import CreateColumn from './index'

describe('CreateColumn', function () {
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
    });

    test('create column with payload', () => {

        const result = CreateColumn(this.keySection, this.payload)

        let desiredResult = {
            keySection : this.keySection,
            ...this.payload
        };

        expect(result).toMatchObject(desiredResult);
    });

});
