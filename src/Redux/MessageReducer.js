
let InitialState = {
    arrMess: [{ id: 1, message: "Hi!" }, { id: 2, message: "How are you?" }, { id: 3, message: "Whats app?" }],
    arrUsers: [{ id: 1, name: "Anton" }, { id: 2, name: "Arina" }, { id: 3, name: "Viktor" }, { id: 4, name: "Alexey" }, { id: 5, name: "Oleg" },],
    TextNewMessage: ""
};

const MessageReducer = (state = InitialState, action) => {
    
    switch (action.type) {
        case "ADD_MESSAGE":
            let newMessage = {
                id: 6,
                message: state.TextNewMessage
            }
            state.TextNewMessage = ""
            return {
                ...state,
                arrMess: [...state.arrMess, newMessage]
            }
        case "MESSAGE_TEXT":
            return {
                ...state,
                TextNewMessage: action.text
            }
        // Object.assign({}, state, { TextNewMessage: action.text });

        default: return state;
    }
}

export const newValue = (text) => ({ type: "MESSAGE_TEXT", text: text })
export const sendMessage = () => ({ type: "ADD_MESSAGE" })

export default MessageReducer


// Object.assign({}, state, {TextNewMessage: ""});
// можно использовать в return (пример в ProfileReducer)