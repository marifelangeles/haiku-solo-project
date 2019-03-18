import { put } from 'redux-saga/effects';
import axios from 'axios';


  function* postShelfInfo(action) {
    try {
      yield axios({
        method: 'post',
        url: '/api/shelf',
        data: action.payload,
      })
      yield put({type: 'GET_SHELF_INFORMATION'})
    }
    catch (err){
      console.log('in getPortInfo (get)', err)
    }
  }

  export default postShelfInfo;