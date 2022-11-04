import {createSlice } from "@reduxjs/toolkit"


const initialState = {
    value:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value = (state.value >= 1) ? state.value -=1 :  state.value
        },
        byPayload:(state,action)=>{
            state.value += parseInt(action.payload)
        }
    }

})

export const {increment, decrement,byPayload} = counterSlice.actions
export default counterSlice.reducer