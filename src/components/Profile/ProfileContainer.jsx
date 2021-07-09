import React from 'react';
import PostInput from "./PostInput";
import PostFeed from "./PostFeed";
import ProfileInfo from "./ProfileInfo";
import MyStatus from "./MyStatus";
import pcss from './Profile.module.css';
import Loading from "../../Global/Loading"
import { textValue, sendPost, getProfile, statusValue, getProfileStatus, putProfileStatus} from "../../Redux/ProfileReducer";
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  constructor(props) { // если в конструкторе нет методов, его можно не писать
    super(props);
  }
  componentDidMount() {
    let userId = this.props.match.params.userId // это свойство приходит с помощью Route, реализовано в App.js
    if (!userId) { userId = this.props.profilePage.id; }
    this.props.getProfile(userId);
    this.props.getProfileStatus(userId)
  }
  render() {
    
    return <>
  {this.props.loading ? <Loading/> : null}
  
  <div className={pcss.profile}>
    <div className={pcss.tittleimg}>
      <img src="https://image.freepik.com/free-photo/aerial-view-of-green-forest_144627-45271.jpg" />
    </div>
    <MyStatus status={this.props.profilePage.MyStatus}
    statusValue={this.props.statusValue}
    putStatus={this.props.putProfileStatus}/>
    <ProfileInfo fullName={this.props.profilePage.fullName} 
    aboutme={this.props.profilePage.aboutme} 
    avatar={this.props.profilePage.avatar}/>
     </div>
    <PostInput textNewPost={this.props.profilePage.TextNewPost}
      textValue={this.props.textValue}
      sendPost={this.props.sendPost}
    />
    <PostFeed posts={this.props.profilePage.Posts} />
  </>
  }
}


let mapStateToProps = (state) => {
  return {
    profilePage: state.ProfilePage
      }
}

let getUrlData = withRouter(ProfileContainer)   // оборачиваем ProfileContainer в getUrlData чтобы передавать состояние ссылок

export default connect(mapStateToProps, {sendPost, textValue, getProfile, statusValue, getProfileStatus, putProfileStatus})(getUrlData)    // оборачиваем getUrlData в connect чтобы передавать dispatch и store