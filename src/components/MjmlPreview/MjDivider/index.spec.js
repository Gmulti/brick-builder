import React from 'react';
import ReactDOM from 'react-dom';
import MjDivider from './index';

import {
    Provider
} from 'react-redux'

import configureStore from '../../../stores'

describe('Divider', function () {
    it('renders without crashing', () => {

        const store = configureStore()
        const div = document.createElement('div');
        
        ReactDOM.render(
            <Provider store={store}>
                <MjDivider component={{}} />
            </Provider>,
            div
        );
    });
})
