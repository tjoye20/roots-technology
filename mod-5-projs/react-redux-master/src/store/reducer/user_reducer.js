
const initialState = {
    users: [
        {
            id: 0,
            name: 'user1'
        },
        {
            id: 1,
            name: 'user2'
        },
        {
            id: 2,
            name: 'user3'
        },
        {
            id: 3,
            name: 'user4'
        },
    ],

    currentUser: {
        id: 0,
        name: 'user1'
    }
}

const user_reducer = (store = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_USER': {
            return { ...store, currentUser: action.payload }
        }


        default:
            return store

    }
}
export default user_reducer

