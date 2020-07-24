import { all, takeLatest } from 'redux-saga/effects';
import { SHOW_TAG, GET_TAGLIST, SET_DEFAULT, GET_DATA_BY_PAGE, GET_DATA_BY_SLUG, POST } from '../constants/actionTypes';

import { getDataDefault, getDataByTag, getByPage } from './tagSaga';
import getTagList from './getTagList';
// import { showTag } from "../actions/TagAction"
// function* forkAll() {
import { postComment, getComment, clearComment } from "./CommentSaga"
// }
function* rootSagas() {
    yield all([
        //fork(forkAll)
        takeLatest(GET_DATA_BY_PAGE, getByPage),
        takeLatest(SHOW_TAG, getDataByTag),
        takeLatest(GET_TAGLIST, getTagList),
        takeLatest(SET_DEFAULT, getDataDefault),
        takeLatest(GET_DATA_BY_SLUG, getComment),
        takeLatest(POST, postComment),
        takeLatest("CLEAR_COMMENT", clearComment),
        //takeLatest("AUTHORIZATION", checkToken),
    ])
}



export default rootSagas;