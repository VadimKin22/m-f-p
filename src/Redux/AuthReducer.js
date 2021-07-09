import { authApi } from "../api/api";

let InitialState = {
    data: {
        id: "",
        login: "",
        email: "",
    },
  auth: false,

  loginVal: "",
  pasVal: "",
  remember: false

};

const AuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        data: action.data,
        auth: action.bul
      }
      case "SET_LOGOUT":
        if (state.auth) {return {
          ...state,
          auth: false
        }} else {return {
          ...state,
          auth: true
        }

        }
      
    case "LOGIN_VALUE":
      return {
        ...state,
        loginVal: action.text
      }
    case "PAS_VALUE":
      return {
        ...state,
        pasVal: action.text
      }
    case "REMEMBER_ME":
      if (state.remember) {
        return {
          ...state,
          remember: false
        }
      } else {
        return {
          ...state,
          remember: true
        }
      }
       case "CLEANING":
      return {
        ...state,
        loginVal: "",
        pasVal: "",
        remember: false
      }
    default: return state;
  }
}

export const setUserAuth = (data, bul) => ({ type: "SET_LOGIN", data, bul});
export const setLogout = () => ({ type: "SET_LOGOUT"});
export const logValue = (text) => ({ type: "LOGIN_VALUE",  text });
export const pasValue = (text) => ({ type: "PAS_VALUE", text: text })
export const rememberMe = () => ({ type: "REMEMBER_ME"})
export const cleaning = () => ({ type: "CLEANING"})

export const getAuthStatus=()=>{
  return async (dispatch) => {
    let data = await authApi.apiGetAuthStatus()
    
      if (data.resultCode === 0) { // проверка, 0 - залогинен 1 - не залогинен
        let login = {   // можно не создавать и сразу передавать в setUserAuth, просто чтобы не запутаться.
          id: data.data.id,
          email: data.data.email,
          login: data.data.login
        }
        dispatch(setUserAuth(login, true))
      }
    
  }
}

export const sendLogin=(email, password, rememberMe)=> async (dispatch)=> {
    let res = await authApi.login(email, password, rememberMe)
     if (res.resultCode === 0) {
        dispatch(getAuthStatus())
        dispatch(cleaning())
      }
     }

  export const logOut=()=>async (dispatch)=> {
      let res = await authApi.logout()
                if (res.data.resultCode === 0) {
        let login = {   // можно не создавать и сразу передавать в setUserAuth, просто чтобы не запутаться.
          id: "",
          email: "",
          login: ""
        }
        dispatch(setUserAuth(login, false))
      }
    
  }

export default AuthReducer

