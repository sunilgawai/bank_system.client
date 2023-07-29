import { createSlice } from "@reduxjs/toolkit";
import { IAuth, ICustomer } from "../types";

const data = localStorage.getItem("auth");
let auth;
if (data) {
  auth = JSON.parse(data);
}
const initialState: IAuth = {
  customer: auth?.customer as ICustomer,
  access_token: auth?.access_token,
  role: auth?.role,
  isAuthenticated: auth ? true : false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const data = action.payload;
      // console.log("data", data);
      localStorage.setItem("auth", JSON.stringify(data));
      state = {
        isAuthenticated: true,
        ...data,
      };
      return state;
    },
    removeAuth: (state) => {
      localStorage.removeItem("auth");
      state = {
        customer: null,
        role: "",
        access_token: "",
        isAuthenticated: false,
      };
      return state;
    },
  },
});

export const { setAuth, removeAuth } = userSlice.actions;
export default userSlice.reducer;
