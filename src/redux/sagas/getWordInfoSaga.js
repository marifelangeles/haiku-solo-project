import { put } from 'redux-saga/effects';
import axios from 'axios';


function* getWordInfo() {
    try {
        
        yield put({type: 'START_LOADING'});
        const wordInfo = yield axios({
            method: 'GET',
            url: '/word'
        })
        console.log('in getWordInfo Saga', wordInfo.data);
        
        yield put({ type: 'SET_WORD', payload: wordInfo.data });
        yield put({type: 'END_LOADING'});
    }
    catch (error) {
        console.log('error with getWordInfo saga', error)
    }
}

export default getWordInfo;