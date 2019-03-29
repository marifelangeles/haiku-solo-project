const wordInfo = (state = {}, action) => {
    console.log('in wordInfo reducer');
    
    switch (action.type) {
        case 'SET_WORD':
            return action.payload;
        case 'RESET_WORD':
            return state;
        default:
            return state;
    }
} 

export default wordInfo;