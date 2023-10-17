import React, { useContext } from "react";
import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "register_user":
      return action.payload;
    case "login_user":
      return action.payload;
    case "logout_user":
      return action.payload;
    default:
      return state;
  }
};

    

const registerUser = (dispatch) => {
  return async (name, email, password, callback) => {
    await jsonServer.post("/register", { name, email, password });
    dispatch({ type: "register_user", payload: { name, email, password } });
    if (callback) {
      callback();
    }
  };
};

const loginUser = (dispatch) => {
  return async (email, password, callback) => {
    const response = await jsonServer.post("/login", { email, password });
    dispatch({
      type: "login_user",
      payload: { email, password, token: response.data.token },
    });
    if (callback) {
      callback();
    }
  };
};


const logoutUser = (dispatch) => {
  return async (callback, state) => {
    try {
      await jsonServer.post("/logout", null, {
        headers: { Authorization: `Bearer ${state.token}` },
      });
      dispatch({ type: "logout_user" });
      if (callback) {
        callback();
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
};

export const { Context, Provider } = createDataContext(loginReducer, {
  registerUser,
  loginUser,
  logoutUser,
});
