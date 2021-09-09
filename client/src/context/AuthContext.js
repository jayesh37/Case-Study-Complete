import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//user is set to null when user did not login
//isFetching decides the beginning and ending of the process
//JSON.parse(localStorage.getItem("user")) <-- is used if user is logged in and we dont want redirect again login after refresh

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

//we create a wrapper AuthContextProvider 
//This wrapper is wrapped around App so that we can access 
//value in entire application
//the parameter {children} is App.js // refer index.js

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  return (
    //The state variable is fetched from reducer to 
    //change the values of initial state

    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/*Working

on the login page after clicking login button
we "dispatch action" then the reducer decides 
which properties should be updated inside INITIAL state

    INITIAL_STATE = {
      user: null,
      isFetching: false,
      error: false,
    };
          |
          |
          |
          V  
        ACTION 1
        LoginStart({mail:john@gmail.com,password:123456})
          |
          |
          |
          V  
        REDUCER
          |
          | update state
          |
          V   
    NEW_STATE = {
      user: null,
      isFetching: true,
      error: false,
    };
          |
          |
          |
          V 
    ACTION 2
        LoginSucces({mail:john@gmail.com,password:123456.................})
          |
          |
          |
          V 
          REDUCER
          |
          | update state
          |
          V   
    NEW_STATE = {
      user: {username:john,mail:john@gmail.com},
      isFetching: true,
      error: false,
    };
*/
