const lines = {
    line1: '',
    line2: '',
    line3: '',
    count1: 0,
    count2: 0,
    count3: 0,
    line1Match: false,
    line2Match: false,
    line3Match: false,
    date: new Date(),
}

const haiku = (state = lines, action) => {
    console.log('in haiku reducer');

    switch (action.type) {
        case 'SET_HAIKU':
            return { ...state, [action.propertyName]: action.payload }
        case 'RESET_HAIKU':
            return action.payload;
        case 'FETCH_HAIKU':
            return state;
        default:
            return state;
    }
}

export default haiku;