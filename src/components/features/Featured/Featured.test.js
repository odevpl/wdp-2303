import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Featured from './Featured';

describe('Component Featured', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Featured />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
