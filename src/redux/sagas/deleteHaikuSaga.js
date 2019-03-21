import { put } from 'redux-saga/effects';
import axios from 'axios';


// delete haiku from database
function* deleteHaiku(action) {
    console.log('in deleteHaiku');
    try {
        // make delete request to server
        yield axios.delete('/haiku/' + action.payload);
        // fetch updated project list
        yield put({ type: 'GET_HAIKU' });
    } catch (error) {
        console.log('error with deleteHaiku', error);
    }
}

export default deleteHaiku;