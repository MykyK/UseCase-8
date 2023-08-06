import { ADD_USER, RESET_TABLE } from './actionTypes';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const resetTable = () => ({
  type: RESET_TABLE,
});
