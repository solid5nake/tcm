import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App.js';
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from '../src/reducers'

const reducer = combineReducers(reducers)
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f
const enhancer = compose(devTools)

// Note: passing enhancer as the last argument requires redux@>=3.1.0
const store = createStore(reducer, enhancer)


describe('<App />', () => {
  it('renders', () => {
    const wrapper = mount(<Provider store={store}><App /></Provider>);
    console.log(wrapper.debug());
  });
});
