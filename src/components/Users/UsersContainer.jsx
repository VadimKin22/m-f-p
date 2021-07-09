import React from 'react';
import {connect} from "react-redux"
import Users from "./Users"
import Loading from "../../Global/Loading"
import {setLoading, getUsers, userUnfollow, userFollow, setCurPage} from "../../Redux/UsersReducer"

class UsersContainer extends React.Component {
  constructor(props) { // если в конструкторе нет методов, его можно не писать
    super(props);
  }
  
  componentDidMount() {
    this.props.getUsers(this.props.currentPage)
  }

    // "https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}"
  pages(totalPages) {
    let arrPages = [];
    for (let i = 1; i <= totalPages; i++) {
      arrPages.push(i + " ")
    }
    return arrPages
  }

  render() {

    return <>{this.props.usersPage.loading ? <Loading /> : null}
      <Users usersPage={this.props.usersPage}
        getUsers={this.props.getUsers}
        setCurPage={this.props.setCurPage}
        userUnfollow={this.props.userUnfollow}
        userFollow={this.props.userFollow}
      /></>
  }
}



const MapToStateProps = (state)=>{
    return {  
      usersPage: state.UsersPage,
      }
}



export default connect(MapToStateProps,{
  setLoading,  getUsers, userUnfollow, userFollow, setCurPage})(UsersContainer);