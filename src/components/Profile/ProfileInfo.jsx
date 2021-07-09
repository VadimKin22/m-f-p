import React from 'react';
import ava from '../../img/ava.jpg';
import pcss from './Profile.module.css';
const ProfileInfo = (props) => {

  return <div>
  <div>{props.fullName}</div>
  <div>{props.aboutme}</div>
   { props.avatar==null ? <img className={pcss.avaAnonim} src={ava}/> : <img src={props.avatar}/>}
  </div>
}

export default ProfileInfo