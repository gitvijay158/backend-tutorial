// src/redux/reducers/index.js
// import { combineReducers } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer'; // Make sure the path is correct

const rootReducer = combineReducers({
  userData: userReducer, // Make sure 'user' is the key that the component is using
  // other reducers can go here
});

export default rootReducer;
