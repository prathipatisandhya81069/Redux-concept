import { configureStore } from "@reduxjs/toolkit";

import studentReducer from "./studentSlice";
import employeeReducer from "./employeeSlice";
import countReducer from "./countSlice";

const store = configureStore({
    reducer: {
        student: studentReducer,
        employee: employeeReducer,
        count: countReducer
    }
});

export default store;