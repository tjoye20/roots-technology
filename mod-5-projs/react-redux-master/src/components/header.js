import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function Header() {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.user.users)
    const currentUser = useSelector(state => state.user.currentUser)

    return (
        <nav className='flex-row   header-container border align-center'>
            <div className='grow1'>
                <Link to='/'>
                    Blog site
                </Link>
            </div>
            <div className='grow1 flex-row justify-end '   >
                <select onChange={(e) => dispatch({ type: "UPDATE_USER", payload: allUsers[e.target.value] })} >
                    {
                        allUsers.map((item, i) => {
                            return <option key={i} value={item.id}>{item.name}</option>


                        })
                    }


                </select>
            </div>



        </nav>
    )
}
