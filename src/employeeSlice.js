import { createSlice } from "@reduxjs/toolkit";

const employeeSlice=createSlice({
    name:"employee",
    initialState:{
        employee:[]
    },
    reducers:{
        addEmployee:(state,action)=>{
            state.employee.push(action.payload);
        }
    }

})

export const {addEmployee}=employeeSlice.actions;
export default employeeSlice.reducer;