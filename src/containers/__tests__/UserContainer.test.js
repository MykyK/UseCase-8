import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import UserContainer from '../UsersContainer';
import usersReducer from '../../store/reducers/users';

jest.mock('../../components/UserForm/UserForm', () => () => <div>UserForm</div>);
jest.mock('../../components/UserTable/UserTable', () => () => <div>UserTable</div>);

describe('UserContainer', () => {
  it('renders UserForm and UserTable components', () => {
    const store = createStore(usersReducer, { users: [] });

    render(
      <Provider store={store}>
        <UserContainer />
      </Provider>
    );

    expect(screen.getByText('UserForm')).toBeInTheDocument();
    expect(screen.getByText('UserTable')).toBeInTheDocument();
  });
});
