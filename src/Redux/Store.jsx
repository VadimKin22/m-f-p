import ProfileReducer from "./ProfileReducer"
import MessageReducer from "./MessageReducer"
let Store = {
    _State: {
        MessagePage: {
            arrMess: [{ id: 1, message: "Hi!" }, { id: 2, message: "How are you?" }, { id: 3, message: "Whats app?" }],
            arrUsers: [{ id: 1, name: "Anton" }, { id: 2, name: "Arina" }, { id: 3, name: "Viktor" }, { id: 4, name: "Alexey" }, { id: 5, name: "Oleg" },],
            TextNewMessage: ""
        },
        ProfilePage: {
            Posts: [{ id: 1, post: "My name Vadim" }, { id: 2, post: "I'm ok!" }, { id: 3, post: "Today i will go home at 21:00" },],
            TextNewPost: ""
        },
        // FriendsBar: {
        //     BestFriends: [
        //         { id: 1, name: "Arina", avatar: "https://sun9-30.userapi.com/s/v1/if1/raJ5btiKwAd0dKgaT-QSlLkcgKZ6ex7IM5MqrFFBEWN5BIe7DDhi_IypnRPnLCBRRUXqrdFo.jpg?size=100x0&quality=96&crop=0,73,720,720&ava=1" },
        //         { id: 2, name: "Vsevolod", avatar: "https://sun9-19.userapi.com/s/v1/if1/uXPuk9a-DwskWKHLUJiSPBeGWccLxGQVUyNq_Mj01jk9uViNnGcnVU5unbelYd9pqnW6YwAo.jpg?size=100x0&quality=96&crop=0,511,1440,1440&ava=1" },
        //         { id: 3, name: "Oleg", avatar: "https://sun9-58.userapi.com/s/v1/if1/HhrqOpxqcInI8WaHSHpVeZ7isW7fnIO-sYhCRDMbKuYCsOnx31GqT1Bw8AJd1DrGmOmByTUS.jpg?size=100x0&quality=96&crop=0,48,365,365&ava=1" }
        //     ]
        // }
    },
    _rerenderAllThree() {
        alert("change")
    },
    _rerender(observer) {
        this._rerenderAllThree = observer
    },
    
    Dispatch(action) {
        // switch (action.type) {
            // case "ADD_POST": this._addPost(); break;
            // case "POST_TEXT": this._postText(action.text); break;
        //     case "ADD_MESSAGE": this._addMessage(); break;
        //     case "MESSAGE_TEXT": this._messagesText(action.text); break;
        // }
        this._State.MessagePage = MessageReducer(this._State.MessagePage, action)
        this._State.ProfilePage = ProfileReducer(this._State.ProfilePage, action)
        this._rerenderAllThree(this)
    }
}


// export default Store

