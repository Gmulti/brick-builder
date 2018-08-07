import React from 'react';
import ReactDOM from 'react-dom';
import { MjSpacer } from './index';

import {
    Provider
} from 'react-redux'

import configureStore from '../../../stores'

describe('Spacer', function () {
    it('renders without crashing', () => {
        const store = configureStore()
        const div = document.createElement('div');

        ReactDOM.render(
            <Provider store={store}>
                <MjSpacer component={{}} />
            </Provider>,
            div
        )
    });
})
