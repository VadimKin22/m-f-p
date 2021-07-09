import React from 'react';
import { connect } from "react-redux"
import Header from './Header';

import { getAuthStatus, logOut} from "../../Redux/AuthReducer"

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {

    return <>
      <Header data={this.props.data} auth={this.props.auth} logOut={this.props.logOut} />
    </>
  }
}
let MapStateToProps = (state) => {
  return {
    data: state.Auth.data,
    auth: state.Auth.auth
  }
}

export default connect(MapStateToProps, { getAuthStatus, logOut})(HeaderContainer)
