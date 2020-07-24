import { SET_TOKEN } from "../constants/actionTypes"
const initial = {
    token: '',
}

const tokenReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_TOKEN:
            console.log("SET Token :", action.token)
            return {
                ...state, token: action.token
            }
        case "CLEAR_TOKEN": {
            console.log("Da clear token");
            return initial
        }
        case "AUTHORIZATION": {
            console.log(" AUTORIZATION Token cua localStronge :", action.token)
            return {
                ...state, token: action.token
            }
        }
        default:
            return state;
    }
}
export default tokenReducer;