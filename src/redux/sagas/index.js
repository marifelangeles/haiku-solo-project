import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getshelfSaga from './getshelfSaga';
import postshelfSaga from './postShelfSaga';
import deleteShelfSaga from './deleteShelfItem';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    takeEvery('GET_SHELF_INFORMATION', getshelfSaga),
    takeEvery('POST_SHELF_INFORMATION', postshelfSaga),
    takeEvery('DELETE_SHELF_INFORMATION', deleteShelfSaga),
  ]);
}
