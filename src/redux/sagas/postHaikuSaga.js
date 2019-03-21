import { put } from 'redux-saga/effects';
import axios from 'axios';


// data to post: word, line1, line2, line3
function* postHaiku(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/haiku',
            data: action.payload,
        })
        // get updated haiku list
        yield put({ type: 'GET_HAIKU' })
    }
    catch (error) {
        console.log('error in postHaikuSaga', error)
    }
}

export default postHaiku;