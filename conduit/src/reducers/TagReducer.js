import { COME_DEFAULT, GET_FAIL_BY_TAG, GET_SUCCESS_BY_TAG, GET_DATA_PAGE_SUCCESS, GET_DATA_PAGE_FAIL, CHANGE_STATUS_LOADING } from '../constants/actionTypes';

const initial = {
    tagItem: "",
    articles: [],
    loading: false,
    yourFeed: false,
}

const TagReducer = (state = initial, action) => {
    switch (action.type) {
        case "COME_YOUR_FEED": {
            return {
                ...state, yourFeed: true, tagItem: ""
            }
        }
        case COME_DEFAULT: {
            return initial;
        }
        case GET_SUCCESS_BY_TAG: {
            console.log("da nhan show-tag by tag", action.receiveData, "and ", action.tagName);
            return {
                ...state, articles: action.receiveData, tagItem: action.tagName
            };
        }
        case GET_FAIL_BY_TAG:
            return state;
        case GET_DATA_PAGE_SUCCESS:
            return {
                ...state, articles: action.data,
            }
        case GET_DATA_PAGE_FAIL:
            return [];
        case CHANGE_STATUS_LOADING:
            return {
                ...state, loading: action.loading
            }
        default:
            return state;
    }
};

export default TagReducer;