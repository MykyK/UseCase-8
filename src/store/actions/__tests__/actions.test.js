import { ADD_USER, RESET_TABLE } from '../actionTypes';
import { addUser, resetTable } from '../';

describe('actions', () => {
  it('should create an action to add a user', () => {
    const user = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', message: 'Hello World' };
    const expectedAction = {
      type: ADD_USER,
      payload: user,
    };
    expect(addUser(user)).toEqual(expectedAction);
  });

  it('should create an action to reset the table', () => {
    const expectedAction = {
      type: RESET_TABLE,
    };
    expect(resetTable()).toEqual(expectedAction);
  });
});
