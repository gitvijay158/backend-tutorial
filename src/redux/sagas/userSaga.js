// userSaga.js

import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as utilsConstant from '../../utils/constant';

import { LOAD_USERS,FETCH_FAILURE, FETCH_SUCCESS, 
  UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, DELETE_USER_REQUEST, DELETE_USER_SUCCESS
} from '../actions/types/userTypes';


// Worker saga: will be fired on FETCH_DATA actions
function* loadUsersRecord() {
  try {

    const response = yield call(axios.get, `${utilsConstant.BASE_URL}/api/users`);
    // console.log("response===>", response.data);
    yield put({ 
        type: FETCH_SUCCESS, 
        payload: response.data
      } );//{ type: 'FETCH_SUCCESS', payload: response.data }
  } catch (error) {
    yield put({ type: FETCH_FAILURE, error });
  }
}

// Watcher saga: spawns a new fetchData saga on each LOAD_USERS action
export function* watchUserGetData() {
    // console.log("watchUserGetData===>");
  yield takeEvery(LOAD_USERS, loadUsersRecord);
}


// Worker Saga: This handles the user update
function* updateUserRecord(action) {
  try {
    const { userId, updatedUserData } = action.payload;
    // console.log("userId===>", userId);
    
    // Example: Assume an API call to update user data
    const response = yield call(axios.put, `${utilsConstant.BASE_URL}/api/users/${userId}`, updatedUserData);

    // Dispatch an action to update the Redux state after a successful update
    yield put({ type: UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_FAILURE, error });
  }
}

// Watcher Saga: Watches for the UPDATE_USER_REQUEST action
export function* watchUpdateUserRecord() {
  yield takeEvery(UPDATE_USER_REQUEST, updateUserRecord);
}

export function* deleteUserRecord(action) {
  try {
    const { userId } = action.payload;
    // console.log("userId===>", userId);
    
    // Example: Assume an API call to delete user data
    yield call(axios.delete, `${utilsConstant.BASE_URL}/api/users/${userId}`);

     // Dispatch action to fetch updated users list
     yield put({ type: DELETE_USER_SUCCESS, payload: userId });

    // Fetch updated user list from the API
    yield put({ type: LOAD_USERS }); // Trigger user list refresh

  } catch (error) {
    yield put({ type: FETCH_FAILURE, error });
  }
}

// Watcher Saga: Watches for the DELETE_USER_REQUEST action
export function* watchDeleteUserRecord() {
  yield takeEvery(DELETE_USER_REQUEST, deleteUserRecord);
}

