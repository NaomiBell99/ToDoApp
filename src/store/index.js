import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../reducers/index'

export const store = configureStore({
  reducer: {
      addtodo: counterSlice
  },
})