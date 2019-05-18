import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getWordInfo from './getWordInfoSaga';
import getHaiku from './getHaikuSaga';
import postHaiku from './postHaikuSaga';
import deleteHaiku from './deleteHaikuSaga';


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
    // delete haiku from history page
    takeEvery('DELETE_HAIKU', deleteHaiku),
    


  ]);
}
