import { put } from 'redux-saga/effects';
import axios from 'axios';


// get haiku list from database
// expect: id, word, line1, line2, line3, date, user_id
function* getHaiku() {
    try {
        const haikuList = yield axios({
            method: 'GET',
            url: '/haiku'
        })
        
        // store it in haikuList reducer
        yield put({ type: 'SET_HAIKU_LIST', payload: haikuList.data })
    }
    catch (error) {
        console.log('error with getHaiku saga', error)
    }
}

export default getHaiku;