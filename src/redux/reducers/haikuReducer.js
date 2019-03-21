const lines = {
    line1: '',
    line2: '',
    line3: '',
    line1Match: false,
    line2Match: false,
    line3Match: false,
}

const haiku = (state = lines, action) => {
    console.log('in haiku reducer');

    switch (action.type) {
        case 'SET_HAIKU':
            return { ...state, [action.propertyName]: action.payload }
        default:
            return state;
    }
}

export default haiku;