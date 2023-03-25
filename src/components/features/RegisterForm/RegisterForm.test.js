import React from 'react';
import { shallow } from 'enzyme';
import RegisterForm from './RegisterForm';

describe('Component RegisterForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<RegisterForm />);
    expect(component).toBeTruthy();
  });
});
