import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import post_reducer from './reducer/post_reducer'
import user_reducer from './reducer/user_reducer'
const allreducer = combineReducers({ user: user_reducer, post: post_reducer })
const store = createStore(allreducer, applyMiddleware(thunk))

export default store