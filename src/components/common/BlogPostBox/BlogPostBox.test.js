import React from 'react';
import { shallow } from 'enzyme';
import BlogPostBox from './BlogPostBox';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component BlogPostBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <BlogPostBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
