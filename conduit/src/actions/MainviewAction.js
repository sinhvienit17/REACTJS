export const getDataDefault = () => {
    return {
        type: 'SET_DEFAULT',
    }
}

export const getDataByTag = (query) => {
    return {
        type: 'SHOW_TAG',
        payload: query,
    }
}

export const getSuccessByTag = (data, tagName) => {
    return {
        type: 'GET_SUCCESS_BY_TAG',
        receiveData: data,
        tagName
    }
}
export const getFailByTag = (err) => {
    return {
        type: 'GET_FAIL_BY_TAG',
        receiveData: err,
    }
}
export const getSuccessDefault = (data) => {
    return {
        type: 'GET_SUCCESS_DEFAULT',
        receiveData: data,
    }
}
export const getFailDefault = (err) => {
    return {
        type: 'GET_FAIL_DEFAULT',
        receiveData: err,
    }
}

export const setLoading = (loading) => {
    return {
        type: "CHANGE_STATUS_LOADING",
        loading
    }
}

export const toComment = (slug) => {
    return {
        type: "TO_COMMENT_PAGE",
        slug
    }
}