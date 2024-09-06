
/*-----------Redux Thunk connection with createStore-------------- */
// src/redux/store.js
// import { createStore, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
// import rootReducer from './reducers'; // Adjust the path to where your root reducer is

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

/*-----------Redux Thunk connection with configureStore(in built:applyMiddleware(thunk))-------------- */
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

/*-----------Redux Saga connection-------------- */
// 1. Import saga middleware
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga'; // 1. Import saga middleware
// import rootReducer from './reducers'; // Adjust the path to where your root reducer is
// import rootSaga from './sagas/rootsagas'; // Import your root saga (where all sagas are combined)

// // 2. Create the saga middleware
// const sagaMiddleware = createSagaMiddleware();// Create the saga middleware

// // 3. Create the Redux store and apply the middleware
// const store = createStore(
//   rootReducer, // Your combined reducers
//   applyMiddleware(sagaMiddleware) // Applying saga middleware to the store
// );

// // 4. Run the root saga
// sagaMiddleware.run(rootSaga);// Run the root saga

// export default store;

/*-----------Redux Saga connection with configureStore logic-------------- */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'; // 1. Import saga middleware
import rootSaga from './sagas/rootsaga'; // Import your root saga (where all sagas are combined)

// // 2. Create the saga middleware
const sagaMiddleware = createSagaMiddleware();// Create the saga middleware

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// 4. Run the root saga
sagaMiddleware.run(rootSaga);// Run the root saga

export default store;
