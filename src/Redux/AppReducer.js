import { authApi } from "../api/api";
import {getAuthStatus} from "./AuthReducer"
let InitialState = {
    initialised: false
};

const AppReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "INITIALISED":
      return {
        ...state,
        initialised: true
      }
      case "NOT_INITIALISED":
        return {
          ...state,
        initialised: true
                }
          
    default: return state;
  }
}

export const initialised = () => ({ type: "INITIALISED"});

export const initialiseApp=()=>(dispatch)=> {
  let promise = dispatch(getAuthStatus())
  
  Promise.all([promise])
  .then(()=>{
    dispatch(initialised())
  })
  
}

// export const getAuthStatus=()=>{
//   return (dispatch) => {
//     authApi.apiGetAuthStatus().then(data => {
      
//       if (data.resultCode === 0) { // проверка, 0 - залогинен 1 - не залогинен
//         let login = {   // можно не создавать и сразу передавать в setUserAuth, просто чтобы не запутаться.
//           id: data.data.id,
//           email: data.data.email,
//           login: data.data.login
//         }
//         dispatch(setUserAuth(login, true))
//       }
//     });
//   }
// }

export default AppReducer

