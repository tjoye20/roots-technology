import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import history from '../history'

function Index(props) {

    const posts = useSelector(state => state.post.posts)
    const users = useSelector(state => state.user.users)
    const findUserName = (aId) => {
        console.log(users, aId)
        let user = users.find((item) => {
            return item.id == aId
        })

        return user.name
    }
    return (
        <div className='grow1 flex-col'>

            <button style={{ padding: '10px', margin: 'auto', marginTop: '20px', marginBottom: '20px', width: '300px' }} onClick={() => props.history.push('/createPost')}>Add post </button>


            <div className='flex-row' style={{ justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {posts.map((item, i) => {

                    return <div key={i} onClick={() => { history.push('/details/' + item.id) }} className='blog-cards border'>
                        <p>
                            {item.title}
                        </p>
                        <p>
                            {item.detail}
                        </p>
                        <div className='flex-row justify-end'>- {

                            findUserName(item.authorId)
                        }


                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}


export const Home = withRouter(Index)