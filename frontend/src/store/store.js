import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice.js"
import departments from "./departmentSlice.js"

const store = configureStore({
    reducer:{
        auth:auth,
        departments:departments
    }
})

export default store