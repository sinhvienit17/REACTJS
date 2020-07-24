import { put } from 'redux-saga/effects';
import axios from 'axios'
import { getSuccessByTag, getFailByTag, getSuccessDefault, getFailDefault, setLoading } from '../actions/MainviewAction';
import { getDataPageSuccess, getDataPageFail } from "../actions/page"

const url = `https://conduit.productionready.io/api/articles?limit=500`;
// const loadData = async (url) => {
//     return await axios.get(url);
// }
function* getDataDefault() {
    try {
        //const data = yield call(loadData, url);
        const data = yield axios.get(url);
        //console.log("data", data.data)
        yield put(getSuccessDefault(data.data))
    } catch (err) {
        yield put(getFailDefault(err));
    }
}
function* getDataByTag(input) {
    try {
        yield put(setLoading(true));
        const limit = 500, offset = 0, tagName = input.payload.tag;
        const data = yield axios.get(`${url}?limit=${limit}&offset=${offset}&tag=${tagName}`);
        console.log("tagName", tagName)
        console.log("databytag", data.data)
        yield put(setLoading(false));
        yield put(getSuccessByTag(data.data, tagName));
    } catch (err) {
        yield put(getFailByTag(err));
    }
}

function* getByPage(inp) {
    try {
        yield put(setLoading(true));
        const limit = 500, offset = inp.page, tagName = inp.tagName;
        console.log("page trong saga", inp)
        const data = yield axios.get(`${url}?limit=${limit}&offset=${offset}&tag=${tagName}`);
        //console.log("data", data.data)
        yield put(setLoading(false));
        yield put(getDataPageSuccess(data.data))
    } catch (err) {
        yield put(getDataPageFail(err));

    }
}

export {
    getDataDefault,
    getDataByTag,
    getByPage,
};
