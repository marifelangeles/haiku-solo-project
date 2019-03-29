

const loading = (state = false, action) => {
    console.log('in wordInfo reducer');

    switch (action.type) {
        case 'START_LOADING':
            return true;
        case 'END_LOADING':
            return false;
        default:
            return state;
    }
}

export default loading;