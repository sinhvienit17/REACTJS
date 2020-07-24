export const getDataByPage = (data) => {
    return {
        type: "GET_DATA_BY_PAGE",
        page: data.page,
        tagName: data.tagName,
    }
}

export const getDataPageSuccess = (data) => {
    return {
        type: "GET_DATA_PAGE_SUCCESS",
        data
    }
}

export const getDataPageFail = () => {
    return {
        type: "GET_DATA_PAGE_FAIL",
    }
}
export const setUserToken = (token) => {
    return {
        type: "SET_TOKEN",
        token
    }
}