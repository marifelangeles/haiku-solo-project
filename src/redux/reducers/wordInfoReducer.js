const wordInfo = (state = {}, action) => {
    switch (action.type) {
        case 'SET_WORD':
            return action.payload;
        default:
            return state;
    }
} 

export default wordInfo;