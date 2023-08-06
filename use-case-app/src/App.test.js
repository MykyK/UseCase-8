import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
import App from './App';
import UsersContainer from './containers/UsersContainer';

jest.mock('./containers/UsersContainer', () => {
  return jest.fn(() => <div>Mock UsersContainer</div>);
});

describe('App', () => {
  it('renders UsersContainer component', () => {
    const store = createStore(reducer, {
      users: {
        users: []
      }
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(UsersContainer).toHaveBeenCalled();
  });
});
