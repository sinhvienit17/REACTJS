
const initial = {
    comments: [],
}
const CmtReducers = (state = initial, action) => {
    switch (action.type) {
        case "GET":
            console.log('reducer')
            return {
                ...state, comments: action.comments
            }
        case "POST_SUCCESS":
            return { ...state, comments: { comments: [action.comments, ...state.comments.comments] } }
        case "FAIL":
            return [];
        case "CLEAR_SUCCESS":
            const idx = action.id;
            return {
                ...state, comments: {
                    comments: state.comments.comments.filter((c) => (c.id !== idx))
                }
            };
        case "CLEAR_FAIL":
            return state;
        default:
            return state;
    }
}

export default CmtReducers;