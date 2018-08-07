import React from 'react';
import ReactDOM from 'react-dom';
import { MjImage } from './index';

import {
    Provider
} from 'react-redux'

import configureStore from '../../../stores'

describe('Image', function () {
    it('renders without crashing', () => {

        const store = configureStore()
        const div = document.createElement('div');

        ReactDOM.render(
            <Provider store={store}>
                <MjImage component={{}} />
            </Provider>,
            div
        )
        
    });
})
