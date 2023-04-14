import { createSlice } from "@reduxjs/toolkit";
const Counter = createSlice({
     name:"data",
     initialState:{
        Counter:1,
        data:4
     },
     reducers:{
        increment:(state,actions)=>{
          state.Counter=state.Counter+actions.payload;
        },
        decrement:(state,actions)=>{
            state.Counter=state.Counter+actions.payload;
        },
        reset:(state)=>{
            state.Counter = 0;
        }
     }
})
export const {increment,decrement,reset}=Counter.actions;
export default Counter.reducer;