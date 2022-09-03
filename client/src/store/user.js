import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("GET_USER", () => {
  const userId = JSON.parse(localStorage.getItem('user')).id
  return axios.get(`/api/users${userId}`)
      .then(user => user.data)
})

export const userRegister = createAsyncThunk("USER_REGISTER", (data) => {
  return axios.post("/api/users/register", data).then((user) => user.data);
});

export const userLogin = createAsyncThunk("USER_LOGGED", (data) => {
  return axios.post("/api/users/login", data).then((user) => {
    localStorage.setItem("user", JSON.stringify(user.data));
    return user.data;
  });
});

export const userLogout = createAsyncThunk("USER_LOGOUT", () => {
  return axios.post("/api/users/logout").then((user) => user.data);
});

const userReducer = createReducer(null, {
  [getUser.fulfilled]: (state, action) => action.payload,  
  [userRegister.fulfilled]: (state, action) => action.payload,
  [userLogin.fulfilled]: (state, action) => action.payload,
  [userLogout.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
