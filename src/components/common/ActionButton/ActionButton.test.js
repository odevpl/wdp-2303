import React from 'react';
import { shallow } from 'enzyme';
import ActionButton from './ActionButton';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ActionButton', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ActionButton />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
