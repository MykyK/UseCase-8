import { ADD_USER, RESET_TABLE } from '../actions/actionTypes';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case RESET_TABLE:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default userReducer;
