
const initialState = {

    posts: []

}
const post_reducer = (store = initialState, action) => {

    switch (action.type) {
        case "ADD_BLOG_POST":
            {
                return { ...store, posts: action.payload }
            }

        case "DELETE_BLOG_POST": {
            return { ...store, posts: action.payload }
        }
        case "UPDATE_BLOG_POST": {
            return { ...store, posts: action.payload }
        }
        default:
            return store

    }
}
export default post_reducer

