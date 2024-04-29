import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/slice'
import postReducer from '../slice/postSlice'
import authUserReducer from '../slice/authUser'

const rootReduce = {
  counter: counterReducer,
  posts: postReducer,
  authUser: authUserReducer
}

export default configureStore({
  reducer: rootReduce,
})

