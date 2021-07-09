import React from 'react';
import { connect } from "react-redux"
import LoginForms from './LoginForms';
import {logValue, pasValue, cleaning, sendLogin, rememberMe} from "./../../Redux/AuthReducer"



const LoginContainer =(props)=>{
      return <LoginForms rememberMe={props.rememberMe} logValue={props.logValue} pasValue={props.pasValue} sendLogin={props.sendLogin} auth={props.auth}
      />
  
}
let mapStateToProps = (state) => {
      return {
        auth: state.Auth
          }
    }

export default connect (mapStateToProps, {logValue, pasValue, cleaning, sendLogin, rememberMe})(LoginContainer)
