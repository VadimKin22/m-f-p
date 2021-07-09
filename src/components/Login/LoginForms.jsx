import React from 'react';


const LoginForms = ({auth, rememberMe, logValue, pasValue, sendLogin}) => {
      let checkbox = (rem) => {
            if (rem) { return <input checked type="checkbox" onClick={() => { rememberMe() }} ></input> }
            else { return <input type="checkbox" onClick={() => { rememberMe() }} ></input> }
}
      return <form>
            <div>
                  <input onChange={(e) => { logValue(e.target.value) }} placeholder="Email"></input>
            </div>
            <div>
                  <input onChange={(e) => { pasValue(e.target.value)  }} placeholder="Password" type="password"></input>
            </div>
            <div>
                  <button onChange={sendLogin(auth.loginVal, auth.pasVal, auth.remember)}>Login</button> 
            </div>
            {checkbox(auth.remember)} Remember me

      </form>
      

}

export default LoginForms
