const haikuList = (state = [], action) => {
    console.log('in haikuList reducer');

    switch (action.type) {
        case 'SET_HAIKU_LIST':
            return action.payload
        default:
            return state;
    }
}

export default haikuList;