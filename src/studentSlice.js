import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:"student",
    initialState:{
        student:[]
    },
    reducers:{
        addStudent:(state,action)=>{
            state.student.push(action.payload)
        },
       deleteStudent: (state, action) => {
            state.student = state.student.filter(
                (s) => s.id !== action.payload
            );
        }
    }

})
export const {addStudent,deleteStudent}=studentSlice.actions;
export default studentSlice.reducer;