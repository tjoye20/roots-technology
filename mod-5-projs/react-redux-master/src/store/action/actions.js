import history from "../../history"

export const createPostaction = (data) => (dispatch, store) => {
    console.log(data)
    let newStore = store()
    let posts = [...newStore.post.posts, data]

    dispatch({ type: "ADD_BLOG_POST", payload: posts })
    history.push('/')


}
export const deletePostaction = (id) => (dispatch, store) => {
    let newStore = store()
    let posts = [...newStore.post.posts]

    let index = posts.findIndex((item) => {

        return item.id == id
    })

    posts.splice(index, 1)

    dispatch({ type: "DELETE_BLOG_POST", payload: posts })
    history.push('/')

}

export const updatepostaction = (obj) => (dispatch, store) => {
    let newStore = store()
    let posts = [...newStore.post.posts]

    let index = posts.findIndex((item) => {

        return item.id == obj.id
    })

    posts.splice(index, 1, obj)

    dispatch({ type: "UPDATE_BLOG_POST", payload: posts })
    history.push('/details/' + obj.id)

}
export const updatepostcommentaction = ({ comment, id }) => (dispatch, store) => {
    let newStore = store()
    let posts = [...newStore.post.posts]

    let index = posts.findIndex((item) => {

        return item.id == id
    })
    posts[index].comments.push(comment)

    dispatch({ type: "UPDATE_BLOG_POST", payload: posts })




}