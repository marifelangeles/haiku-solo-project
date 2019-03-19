const haikuLine = (state = {}, action) => {
    console.log('in haikuLine reducer');

    switch (action.type) {
        case 'SET_HAIKU_LINE':
            return { ...state, [action.propertyName]: action.payload }
        default:
            return state;
    }
}

export default haikuLine;