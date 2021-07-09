import BuddysWindow from './BuddysWindow';
import DialogsWindow from './DialogsWindow';
import { newValue, sendMessage } from "./../../Redux/MessageReducer";
import mcss from "./Messages.module.css"
import { connect } from "react-redux"
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const MessagesContainer = ({messagePage, newValue, sendMessage}) => {
 return <div className={mcss.all}>
    <div className={mcss.buddysWindow}>
      <BuddysWindow arrUsers={messagePage.arrUsers} /></div>
    <div className={mcss.dialogsWindow}>
      <DialogsWindow arrMess={messagePage.arrMess} /></div>
    <div>
      <textarea value={messagePage.TextNewMessage}
        onChange={(e) => {newValue(e.target.value)        }}
        name="sendMess" cols="80" rows="3"></textarea>
      <input onClick={() => {sendMessage()}} type="submit" value="Send message" />
    </div>

  </div>
}



let mapStateToProps = (state) => {
  return {
    messagePage: state.MessagePage,
    isAuth: state.Auth.auth
  }
}




export default  compose(
  connect(mapStateToProps, { sendMessage, newValue }),
  withAuthRedirect
   )(MessagesContainer)
