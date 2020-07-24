import axios from "axios";
import { put } from "redux-saga/effects";

const url = `https://conduit.productionready.io/api/articles`;

function* getComment(input) {
    try {
        // console.log("INPUT:", input);
        const slug = input.slug;
        console.log("INPUT:", slug);
        const data = yield axios.get(`${url}/${slug}/comments`);
        console.log("data cua comment:", data.data)
        yield put({ type: "GET", comments: data.data })
    } catch (err) {
        console.log(err);
        yield put({ type: "FAIL" });
    }
}

function* postComment(input) {
    try {
        console.log("INPUT:", input);
        const body = input.body;
        const slug = input.slug;
        const token = input.token;
        console.log("INPUT body:", body);
        console.log("INPUT slug:", slug);

        // const data = yield axios({
        //     method: "POST"
        //     , url: `${url}/${slug}/comments`,
        //     headers: {
        //         Authorization: `Token ${token}`
        //     },
        //     data: {
        //         comment: {
        //             body
        //         }
        //     }
        const data = yield axios.post(`${url}/${slug}/comments`, {
            "comment": {
                "body": body
            }
        }, {
            "headers": {
                "Authorization": `Token ${token}`
            }
        });
        console.log("data cua input textarea:", data.data.comment)
        yield put({ type: "POST_SUCCESS", comments: data.data.comment })
    } catch (err) {
        console.log(err);
        yield put({ type: "POST_FAIL" });
    }
}

function* clearComment(input) {
    try {
        const token = input.token;
        const slug = input.slug;
        const commentId = input.id;
        yield axios({
            method: "DELETE",
            url: `${url}/${slug}/comments/${commentId}`,
            headers: {
                Authorization: `Token ${token}`
            },
        });
        console.log("clear comment success:")
        yield put({ type: "CLEAR_SUCCESS", id: commentId })
    } catch (err) {
        console.log(err);
        yield put({ type: "CLEAR_FAIL" });
    }
}

export {
    postComment,
    getComment,
    clearComment,
};