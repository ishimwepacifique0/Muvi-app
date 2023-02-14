import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {deleteItemAsync, setItemAsync } from "expo-secure-store";


const initialState = {
    data:[],
    isLoggedin:false,
    token:''
}

 export const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
    signUp:(state,action)=>{
        state.data = action.payload
        state.isLoggedin = true
    },
    signin:(state,action)=>{
        state.data = action.payload
        state.isLoggedin = true
    },
    storeToken:(state, action)=>{
        state.data = action.payload
    },
    logout:(state)=>{
        state.isLoggedin = false
        state.data = null
    },
    edit:(state,action)=>{
        state.isLoggedin = true,
        state.data = action.payload
    }

}
})

export const {signin,signUp,logout,edit } = authenticationSlice.actions
export default authenticationSlice.reducer  

export const signIn = (data) => async (dispatch)=>{
    try {
        
         const response = await axios({
            method:'post',
            url:'https://blog-j7dj.onrender.com/user/login',
            data:data
         });
         console.log(response.data, "response data")
         dispatch(signin(response.data))
         setItemAsync("userdata",JSON.stringify(response.data))
         dispatch(storeToken(response.data.token))
         setItemAsync("userToken",JSON.stringify(response.data.token))

    } catch (error) {
        console.log(error)
        
    }
}

export const signup = (data) => async (dispatch)=>{
    try {
        
         const response = await axios({
            method:'post',
            url:'https://blog-j7dj.onrender.com/user/signup',
            data:data
         });
         console.log(response.data)
         dispatch(signUp(response.data))
         setItemAsync("usedata",JSON.stringify(response.data))

    } catch (error) {
        console.log(error)
        
    }
}

export const signout = () => async (dispatch)=>{
    deleteItemAsync('userToken')
    dispatch(logout())
}

export const UserEdit = (data) => async (dispatch)=>{
    try{
    const response = await  axios({
        method:'put',
        url:`https://blog-j7dj.onrender.com/user/${data._id}`,
        data:data
    })
    console.log(response.data)
    dispatch(edit(response.data))
    setItemAsync("usedata",JSON.stringify(response.data))
    }catch(error){
        console.log(error)
    }
}
export const Deleteuser = (data) => async (dispatch) =>{
    try{
        const response = await axios({
            method:'delete',
            url:`https://blog-j7dj.onrender.com/user/${data._id}`
        })
        console.log(response.data)
        dispatch(logout())

    }catch(err){
        console.log(err)
    }
}