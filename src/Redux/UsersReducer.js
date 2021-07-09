import { usersApi } from "../api/api";

let InitialState = {
    users: [],
    totalUsers: 0,
    totalPages: 0,
    currentPage: 1,
    loading: false,
    pressingNumBut: []
};

const UsersReducer = (state = InitialState, action) => {
    
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: [...action.arrUsers1]
                
            }
        case "SET_TOTAL_USERS":
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case "SET_TOTAL_PAGES":
                        return {
                ...state,
                totalPages: Math.ceil(state.totalUsers / action.UsersOnPage)
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        
        case "CLICK_FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case "CLICK_UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case "LOADING":

            return {
                ...state,
                loading: action.loading
            }
        case "PRESSING":
            
            return {
                ...state,
                pressingNumBut: action.pressing ? [...state.pressingNumBut, action.buttonId]
                : state.pressingNumBut.filter(id=>id!=action.buttonId)
                  }

        default: return state;
    }
}

export const addUsers = (arrUsers1) => ({ type: "SET_USERS", arrUsers1})
export const setUsers = (totalUsers) => ({ type: "SET_TOTAL_USERS", totalUsers})
export const setPages = (UsersOnPage) => ({ type: "SET_TOTAL_PAGES", UsersOnPage})
export const setCurPage = (currentPage) => ({ type: "SET_CURRENT_PAGE", currentPage})
export const followClick = (userId) => ({ type: "CLICK_FOLLOW", userId })
export const unFollowClick = (userId) => ({ type: "CLICK_UNFOLLOW", userId })
export const setLoading = (loading) => ({ type: "LOADING", loading })
export const setPressing = (pressing, buttonId) => ({ type: "PRESSING",pressing, buttonId })

export default UsersReducer

export const getUsers=(currentPage)=>{
    return async (dispatch)=>{
        dispatch(setLoading(true))
       let data = await usersApi.apiGetUsersPage(currentPage)
            dispatch(addUsers(data.items));
         dispatch(setUsers(data.totalCount));
         dispatch(setPages(data.items.length));
         dispatch(setLoading(false));
    }
    
}

export const userUnfollow = (userId) => {
    return async (dispatch) => {
        dispatch(setPressing(true, userId));
        let data = await usersApi.apiUserUnfollow(userId)
            if (data.resultCode == 0) { dispatch(unFollowClick(userId)) }
            dispatch(setPressing(false, userId));
    }
}

export const userFollow = (userId) => {
    return async (dispatch) => {
        dispatch(setPressing(true, userId));
        let data = await usersApi.apiUserFollow(userId)
            if (data.resultCode == 0) { dispatch(followClick(userId)) }
            dispatch(setPressing(false, userId));
            }
}

// Object.assign({}, state, {TextNewMessage: ""});
// можно использовать в return (пример в ProfileReducer)