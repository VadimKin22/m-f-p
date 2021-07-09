import { profileApi } from "../api/api";
let InitialState = {
    MyStatus: "",
    Posts: [{ id: 1, post: "My name Vadim" }, { id: 2, post: "I'm ok!" }, { id: 3, post: "Today i will go home at 21:00" },],
    TextNewPost: "Hi!",
    id: 17449,
    fullName: "",
    aboutme: "",
    avatar: ""
    
};

const ProfileReducer = (state = InitialState, action) => {
    
    switch (action.type) {
       
        case "SET_PROFILE":
            return {
                ...state,
                fullName: action.fullName,
                aboutme: action.aboutme,
                avatar: action.avatar
            }
        case "ADD_POST":
            let newPost = {
                id: 4,
                post: state.TextNewPost
            }
            state.Posts.unshift(newPost);
            return {
                ...state,
                TextNewPost: ""
            }
        case "POST_TEXT":
            return {
                ...state,
                TextNewPost: action.text
            }
            
            case "STATUS_TEXT":
                if (action.text==null|| action.text.length==0){
                    return {
                        ...state,
                        MyStatus: "EnterStatus"
                    }
                }
            return {
                ...state,
                MyStatus: action.text
            }
            
        default:
            return state;
    }
}

export const statusValue = (text) => ({ type: "STATUS_TEXT", text });
export const textValue = (text) => ({ type: "POST_TEXT", text });
export const sendPost = () => ({ type: "ADD_POST" });
export const setProfile = (avatar, fullName, aboutme,) => ({ type: "SET_PROFILE", avatar, fullName, aboutme});
export default ProfileReducer

export const getProfile=(userId)=>{
    return async (dispatch)=>{
        let data = await profileApi.apiGetProfile(userId)
                    dispatch(setProfile(data.photos.small, data.fullName, data.aboutMe))
   }
};

export const getProfileStatus=(userId)=>{
      return async (dispatch)=>{
        let data = await profileApi.apiGetProfileStatus(userId)
            dispatch(statusValue(data))
        
    }
};

export const putProfileStatus=(text)=>{
    return (dispatch)=>{
        profileApi.apiPutProfileStatus(text).then(res=> {
            
            if (res.data.resultCode==0){
                dispatch(statusValue(text));
            }
            
        })
    }
}
