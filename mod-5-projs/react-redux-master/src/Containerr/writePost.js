import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPostaction, updatepostaction } from '../store/action/actions';

export function CreatePost(props) {
    const [title, settitle] = useState('');
    const [detail, setdetail] = useState('')
    const [postid, setpostid] = useState('')
    const [comments, setcomments] = useState([])
    const [err, seterr] = useState({})
    const { id } = props.match.params
    const currentUser = useSelector(state => state.user.currentUser)
    const posts = useSelector(state => state.post.posts)


    useEffect(() => {
        if (id) {
            let data = posts.find((item) => {
                return item.id == id
            })

            settitle(data.title)
            setdetail(data.detail)
            setpostid(data.id)
            setcomments(data.comments)


        }



    }, [])
    const dispatch = useDispatch()


    const handleSubmit = () => {
        if (title == '') {

            seterr({ id: 0, message: 'Please Enter the blog title!!!' })
            return

        } else if (detail == '') {
            seterr({ id: 1, message: 'Please Enter the blog Description!!!' })
            return

        }




        let uid = Math.floor(Math.random() * 100000)
        let obj = {
            authorId: currentUser.id,
            id: uid,
            title,
            detail,
            comments: []
        }
        if (id) {
            dispatch(updatepostaction({ ...obj, id: id, comments: comments }))
        } else {

            dispatch(createPostaction(obj))
        }


    }

    return (
        <div className='flex-row justify-center '>
            <div style={{ margin: 'auto', margin: "20px" }} className='flex-col grow1 create-post-container border  '>

                <div className='post-input-Group flex-col grow1'>
                    <p> Title</p>
                    <input value={title} className='grow1' onChange={(e) => { settitle(e.target.value) }} />
                    {err.id == 0 && <p className='err-text'>{err.message}</p>}
                </div>
                <div className='post-input-Group flex-col grow1'>
                    <p> Description </p>
                    <textarea value={detail} className='grow1' rows='5' onChange={(e) => { setdetail(e.target.value) }} />
                    {err.id == 1 && <p className='err-text'>{err.message}</p>}

                </div>
                {
                    id ? <button onClick={handleSubmit}>update Post</button> :
                        <button onClick={handleSubmit}>Create Post</button>
                }

            </div>
        </div>
    )
}
