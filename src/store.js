import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "./features/authSlice";
import authenticationSliceReducer from "./features/authSlice";

const Store  = configureStore({
    reducer:{
        authactor:authenticationSliceReducer
    }
})
export default Store;