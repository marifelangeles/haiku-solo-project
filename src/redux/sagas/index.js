import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getWordInfo from './getWordInfoSaga';
import getHaiku from './getHaikuSaga';
import postHaiku from './postHaikuSaga';


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

    // get random word from API 
    takeEvery('GET_WORD_INFO', getWordInfo),
    // get haiku list from database
    takeEvery('GET_HAIKU', getHaiku),
    // save created haiku in database
    takeEvery('POST_HAIKU', postHaiku),
    


  ]);
}
