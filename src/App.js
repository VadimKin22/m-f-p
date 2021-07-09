import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer"
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from "./components/Profile/ProfileContainer"
import LoginContainer from "./components/Login/LoginContainer"
import { getAuthStatus} from "./Redux/AuthReducer"
import { Route } from "react-router-dom"
import {connect} from "react-redux"
import { compose } from 'redux'
import { withRouter } from 'react-router'
import Loading from "./Global/Loading"
import {initialiseApp} from "./Redux/AppReducer"
const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer")); // lazy - функция, которая позволяет не подгружать выбранные компоненты сразу,
const News = React.lazy(() => import("./components/News/News")); //  а только когда пользователь перейдёт на них
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer")); // компоненты для lazy загрузки выделяются <Suspense/>


//asdf
class App extends React.Component {
  constructor(props) { 
    super(props);
  }
  componentDidMount() {
    this.props.getAuthStatus()
 this.props.initialiseApp()
     }

  render() {
    if (!this.props.initialised){
      return <Loading/>
    } else{
    return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Route path="/login" render={() => <LoginContainer />} />
      <Navbar />
      <div className="main">
        <Route path='/profile/:userId?' // :iserId - опциональный путь, который приходит в пропсы (props.match.params.userId). ? - значит необязательно, если его не будет, загрузится /profile'. это библиотека Route
        render={() => <ProfileContainer  />} 
        />
        <Suspense fallback={<Loading/>}>
        <Route path='/messages' render={() => <MessagesContainer />}
        />
        <Route path='/news' render={() => <News />} />
          <Route path="/users" render={() => <UsersContainer />} />
          
          </Suspense>
      </div>
    </div >
  );
}
}
}

const MapToStateProps = (state)=>({
  initialised: state.App.initialised
})

export default compose(
  withRouter,
  connect(MapToStateProps,{getAuthStatus, initialiseApp}))(App)
