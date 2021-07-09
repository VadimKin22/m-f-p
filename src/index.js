import store from "./Redux/ReduxStore"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
// let rerenderAllThree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()} store={store} />
      </Provider>
    </BrowserRouter>
    , document.getElementById('root')
  );
// }


// rerenderAllThree()

// store.subscribe(()=>{
//   rerenderAllThree();
// })

// store.subscribe(()=>{
//   let state = store.getState();
//   rerenderAllThree(state);
// })
// rerenderAllThree(Store);
// Store._rerender(rerenderAllThree)


