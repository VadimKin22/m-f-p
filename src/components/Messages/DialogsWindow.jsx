import React from 'react';

const DialogsWindow = (props) => {
    return <div>
   {props.arrMess.map(el =><div>{el.message} </div>)}
  </div>
}


export default DialogsWindow