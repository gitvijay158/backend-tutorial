// src/redux/reducers/userReducer.js
import { LOAD_USERS, DELETE_USER_SUCCESS, FETCH_FAILURE, FETCH_SUCCESS, UPDATE_USER_SUCCESS } from '../actions/types/userTypes';

const initialState = {
  loading: false, users: [], error: ''
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_USERS:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      };
    case FETCH_FAILURE:
      return { loading: false, users: [], error: action.error };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
