// src/redux/actions/userActions.js
import { LOAD_USERS, UPDATE_USER_REQUEST, DELETE_USER_REQUEST } from './types/userTypes';

// Action to load users
// Dispatch the action to trigger the saga and fetch users from the API
export const loadUsers = () => ({
  type: LOAD_USERS,
  payload: []
});

// Action to update a user
export const updateUser = (userId, updatedUserData) => ({
  type: UPDATE_USER_REQUEST,
  payload: { userId, updatedUserData },
});

// Action to delete a user
export const deleteUser = (userId) => ({
  type: DELETE_USER_REQUEST,
  payload: { userId }
});

