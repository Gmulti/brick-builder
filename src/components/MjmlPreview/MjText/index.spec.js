import React from 'react';
import ReactDOM from 'react-dom';
import { MjText } from './index';

import {
    Provider
} from 'react-redux'

import configureStore from '../../../stores'

describe('Text', function () {
    it('renders without crashing', () => {
        const store = configureStore()
        const div = document.createElement('div');

        ReactDOM.render(
            <Provider store={store}>
                <MjText component={{}} />
            </Provider>,
            div
        )
    });
})
