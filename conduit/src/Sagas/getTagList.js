import axios from 'axios'
import { put } from 'redux-saga/effects';
import { GET_SUCCESS, GET_FAIL } from '../constants/actionTypes';


const BASE_URL = 'https://conduit.productionready.io/api/tags';

function* getTagList() {
    try {
        const response = yield axios.get(BASE_URL)
        //console.log(res.data.tags);
        yield put({ type: GET_SUCCESS, receiveTagList: response.data.tags });
    }
    catch (error) {
        yield put({ type: GET_FAIL, receiveTagList: error });
    }
}
export default getTagList;