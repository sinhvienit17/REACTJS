
import { combineReducers } from 'redux'
import tagListReducer from "./tagListReducer";
import TagReducer from "./TagReducer";
import defaults from "./defaults"
import CmtReducers from "./CmtReducers"
import tokenReducer from "./tokenReducer"
const rootReducers = combineReducers({
    tag: TagReducer,
    tagList: tagListReducer,
    defaults: defaults,
    comments: CmtReducers,
    token: tokenReducer,
})
export default rootReducers;