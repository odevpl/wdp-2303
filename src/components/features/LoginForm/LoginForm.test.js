import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('Component LoginForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<LoginForm />);
    expect(component).toBeTruthy();
  });
});
