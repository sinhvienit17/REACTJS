import { GET_SUCCESS_DEFAULT, GET_FAIL_DEFAULT } from '../constants/actionTypes';

const initial = {
    articles: [],
}

const defaults = (state = initial, action) => {
    switch (action.type) {
        case GET_SUCCESS_DEFAULT: {
            console.log("da nhan show-tag-default", action.receiveData);
            return {
                ...state, articles: action.receiveData
            };
        }
        case GET_FAIL_DEFAULT:
            return state;
        default:
            return state;
    }
};

export default defaults;