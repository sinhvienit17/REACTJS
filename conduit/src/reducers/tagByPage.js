import { GET_DATA_PAGE_SUCCESS, GET_DATA_PAGE_FAIL } from "../constants/actionTypes"

const initial = {
    data: [],
}

const tagByPage = (state = initial, action) => {
    switch (action.type) {
        case GET_DATA_PAGE_SUCCESS:
            return {
                ...state, data: action.data
            }
        case GET_DATA_PAGE_FAIL:
            return [];
        default:
            return state;
    }
}
export default tagByPage;