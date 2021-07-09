import React from 'react';
import bcss from './BestFriends.module.css';
const BestFriends = (props) => {
  let bestfriends = props.bestFriends.map(el => <div className={bcss.bestfriends}>
    <img src={el.avatar} />
    {el.name} </div>)
  return <div>
    {bestfriends}
  </div>
}


export default BestFriends