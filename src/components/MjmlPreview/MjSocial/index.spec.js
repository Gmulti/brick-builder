import React from 'react';
import ReactDOM from 'react-dom';
import { MjSocial } from './index';

import {
    Provider
} from 'react-redux'

import configureStore from '../../../stores'

describe('Social', function () {
    it('renders without crashing', () => {
        const store = configureStore()
        const div = document.createElement('div');

        ReactDOM.render(
            <Provider store={store}>
                <MjSocial component={{}} />
            </Provider>,
            div
        )
        
    });
})
