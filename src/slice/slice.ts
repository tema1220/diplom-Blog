import { createSlice, current} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        favArray: [],
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        addToFav(state: any, { payload }: { payload: any }) {
            state.favArray.push(payload)
        }
    },
});


export const { increment, decrement, addToFav } = counterSlice.actions

export default counterSlice.reducer
