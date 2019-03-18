import { put } from 'redux-saga/effects';
import axios from 'axios';


  function* deleteShelfItem(action) {
    try {
        console.log('Saga Delete payload:', action.payload);
      yield axios({
        method: 'delete',
        url: '/api/shelf',
        data: {
            id: action.payload,
        },
      })
      yield put({type: 'GET_SHELF_INFORMATION'})
    }
    catch (err){
      console.log('Delete saga error', err)
    }
  }

  export default deleteShelfItem;