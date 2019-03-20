const haiku = (state = {}, action) => {
    console.log('in haiku reducer');

    switch (action.type) {
        case 'SET_HAIKU':
            return { ...state, [action.propertyName]: action.payload }
        default:
            return state;
    }
}

export default haiku;