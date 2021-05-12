import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostaction, updatepostaction, updatepostcommentaction } from '../store/action/actions'

export function Detail(props) {
    const [post, setpost] = useState({})
    const { id } = props.match.params
    const posts = useSelector(state => state.post.posts)
    const currentUser = useSelector(state => state.user.currentUser)
    const [comment, setcomment] = useState('')
    const allUsers = useSelector(state => state.user.users)
    const dispatch = useDispatch()
    useEffect(() => {
        let data = posts.find((item) => {
            return item.id == id
        })

        setpost(data)
    }, [posts])
    const handleDelete = () => {
        dispatch(deletePostaction(post.id))
    }
    const addcomment = () => {
        if (comment) {

            dispatch(updatepostcommentaction({ id: id, comment: { user_id: currentUser.id, comment: comment } }))
        }
    }
    const nameformat = (id) => {

        let data = allUsers.find((item) => {
            return item.id == id
        })

        return data.name

    }
    if (Object.keys(post).length <= 0) {
        return null
    }
    return (
        <div>





            {

                post && currentUser.id == post.authorId &&
                < div className='flex-row justify-end'>
                    <button onClick={() => props.history.push('/update/' + id)} style={{ margin: "10px" }}>Edit</button>
                    <button onClick={handleDelete} style={{ margin: "10px" }}>Delete</button>

                </div>
            }

            <div style={{ padding: '20px' }}>

                <h2>
                    {post.title}
                </h2>
                <p>
                    {post.detail}
                </p>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

            </div>



            <div style={{ padding: '20px' }}>
                <p>Comment Section</p>


                <div>

                    <input onChange={(e) => setcomment(e.target.value)} />

                    <button onClick={addcomment}>add comment</button>
                </div>


                {post.comments.map((item, i) => {

                    return <div style={{ backgroundColor: '#eee', borderRadius: '20px', padding: '5px',paddingLeft:'20px', margin: '10px' }}>
                        <p style={{ margin: '0px' }}>{nameformat(item.user_id)}</p>
                        <p style={{ margin: '0px' }}>{item.comment}</p></div>
                })}

            </div>


        </div >
    )
}
