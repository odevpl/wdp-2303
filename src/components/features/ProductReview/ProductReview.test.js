import React from 'react';
import { shallow } from 'enzyme';
import ProductReview from './ProductReview';

describe('Component ProductReview', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductReview />);
    expect(component).toBeTruthy();
  });
});
