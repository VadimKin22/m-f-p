import React from 'react';
import {NavLink} from "react-router-dom";

const User = (props) => {
  let path = "/messages/"+props.id;
  return <div >
    <NavLink to={path}> {props.name}</NavLink>
  </div >
}


const BuddysWindow = (props) => {
  const mapq =props.arrUsers.map(el => <User id={el.id} name={el.name}/>);
  return <div >
    {props.arrUsers.map(el => <User id={el.id} name={el.name}/>)}
  </div>
}

export default BuddysWindow