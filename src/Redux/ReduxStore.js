import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessageReducer from "./MessageReducer";
import FriendsBarReducer from "./FriendsBarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    MessagePage: MessageReducer,
    ProfilePage: ProfileReducer,
    FriendsBar: FriendsBarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    App: AppReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store