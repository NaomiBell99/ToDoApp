import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  text: '',
  isDone: false
}

var nextId = 0;

export const counterSlice = createSlice({
  name: 'addtodo',
  initialState,
  reducers: {
    add: (state, todo) => {
      state.id = nextId++
      state.text = todo.payload.text
      state.isDone = false
    }
  },
})

export const { add } = counterSlice.actions

export default counterSlice.reducer