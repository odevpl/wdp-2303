import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

describe('Register', () => {
  it('renders without crashing', () => {
    shallow(<Register />);
  });
});
