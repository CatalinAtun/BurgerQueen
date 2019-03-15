import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App.js';
configure({ adapter: new Adapter() });

describe('App', () => {
  it('debería renderizar tres <div />', () => {
    expect(shallow(<App />).find('div').length).toEqual(3);
  });
});

