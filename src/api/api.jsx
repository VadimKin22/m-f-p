import * as axios from "axios"



const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "774ee07f-a9a9-44b3-b2bb-b81f62dade40"
    }
});


export const usersApi={
    apiGetUsersPage: (currentPage)=>{
        return instance.get(`users?page=${currentPage}&count=10`).then(res => { return res.data; });
    },
    apiUserUnfollow: (userId)=>{
        return instance.delete(`follow/${userId}`).then(res => { return res.data; });
    },
    apiUserFollow: (userId) => {
        return instance.post(`follow/${userId}`).then(res => { return res.data; });
    }

}

export const authApi={
    apiGetAuthStatus: () => {
        return instance.get(`auth/me`).then(res => { return res.data; });
    },
    login: (email, password, rememberMe)=> {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout: ()=> {
        return instance.delete(`auth/login`);
    }
}

export const profileApi={
    apiGetProfile: (Id) => {
               return instance.get(`profile/${Id}`).then(res => { return res.data; });
        },
    apiGetProfileStatus: (id)=> {
          return instance.get(`profile/status/${id}`).then(res => { return res.data;});
    },
    apiPutProfileStatus: (text)=>{
        return instance.put(`profile/status`, {status: text});
    }
}
