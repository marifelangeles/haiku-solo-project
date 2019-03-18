import { put } from 'redux-saga/effects';
import axios from 'axios';


  function* getShelfInfo() {
    try {
      const shelfInfo = yield axios({
        method: 'GET',
        url: '/api/shelf'
      })
      yield put({type: 'SET_SHELF_INFO', payload: shelfInfo.data})
    }
    catch (err){
      console.log('in getPortInfo (get)', err)
    }
  }

  export default getShelfInfo;