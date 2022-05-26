import { createSlice } from '@reduxjs/toolkit'


const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },

    reducers: {
        setData(state, action) {
           state.data = action.payload;
            
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment } = dataSlice.actions

export default dataSlice.reducer


// Thunks
export function fetchData() {
  return async function fetchDataThunk(dispatch, getState) {
      
  }
}
