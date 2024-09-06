// rootsaga.js

import { all, call } from 'redux-saga/effects';
import { watchUserGetData,watchUpdateUserRecord , watchDeleteUserRecord} from './userSaga'; // Import your individual sagas

// Root saga that combines all other sagas
function* rootSaga() {
  yield all([ 
    call(watchUserGetData), // Add more sagas here if needed
    call(watchUpdateUserRecord),
    call(watchDeleteUserRecord)
  ]);
}

export default rootSaga;
