const shelfInfo = (state = [], action) => {
    console.log('in shelfinfo reducer.')
    switch(action.type) {
      case 'SET_SHELF_INFO':
      return action.payload
      default: 
      return state;
    }
  }

  export default shelfInfo;