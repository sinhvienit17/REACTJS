export const showTag = (tagName) => {
    return {
        type: 'SHOW_TAG',
        payload: tagName,
    }
}
export const getTagList = () => {
    return {
        type: 'GET_TAGLIST',
    }
}

export const getSuccess = (data) => {
    return {
        type: 'GET_SUCCESS',
        receiveTagList: data
    }
}
export const getFail = (err) => {
    return {
        type: 'GET_FAIL',
        receiveTagList: err,
    }
}