import userReducer from '../users';
import { ADD_USER, RESET_TABLE } from '../../actions/actionTypes';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      users: []
    });
  });

  it('should handle ADD_USER', () => {
    const addUserAction = {
      type: ADD_USER,
      payload: { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Hello world!' }
    };
    
    expect(userReducer(undefined, addUserAction)).toEqual({
      users: [{ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Hello world!' }]
    });
  });

  it('should handle RESET_TABLE', () => {
    const initialState = {
      users: [{ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Hello world!' }]
    };

    const resetTableAction = {
      type: RESET_TABLE
    };

    expect(userReducer(initialState, resetTableAction)).toEqual({
      users: []
    });
  });
});
