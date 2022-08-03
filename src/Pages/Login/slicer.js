import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    nama: "",
  },
  reducers: {
    login: (state, action) => {
      return { ...state, isLogin: true, nama: action.payload };
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
