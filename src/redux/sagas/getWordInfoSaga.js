import { put } from 'redux-saga/effects';
import axios from 'axios';


function* getWordInfo() {
    try {
        const wordInfo = yield axios({
            method: 'GET',
            url: '/word'
        })
        yield put({ type: 'SET_WORD', payload: wordInfo.data })
    }
    catch (error) {
        console.log('error with getWordInfo saga', error)
    }
}

export default getWordInfo;