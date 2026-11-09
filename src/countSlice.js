import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
name:"count",
initialState:{
    count:0
},
reducers:{
    IncCount:(state,action)=>{
        state.count=state.count+1;
    },
    DecCount:(state,action)=>{
        state.count=state.count-action.payload
    }

}
})
export const {IncCount,DecCount}=countSlice.actions;
export default  countSlice.reducer;