import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App /> Component Test', () => {
  it('expect to Render App Component', () => {
    expect(shallow(<App />));
  });
});
