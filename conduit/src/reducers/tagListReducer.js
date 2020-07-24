import { GET_SUCCESS, GET_FAIL } from '../constants/actionTypes'
const initial = {
    tags: [],
}
const tagListReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_SUCCESS: {
            //console.log("nhan reducer la:", action.receiveTagList)
            return {
                ...state, tags: action.receiveTagList,
            };
        }
        case GET_FAIL: {
            return state;
        }
        default:
            return state;
    }
}
export default tagListReducer;