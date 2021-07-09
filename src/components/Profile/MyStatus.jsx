import React, {useState} from 'react';

let MyStatus =({putStatus, status, statusValue})=>{
let [checkStatus, setcheckStatus] = useState(false); // useState - хук, возвращает массив из 2 элементов, которые присваиваются "checkStatus, setcheckStatus" checkStatus - присваивается значение false
// setcheckStatus - становится функцией, вызвав которую можно изменить значение checkStatus например - setcheckStatus(false )
let setStatus=(bul) =>{
    setcheckStatus(bul)
    if (bul==false) {
      putStatus(status)
    }
  }
  let onStatusChange=(e)=> {
    statusValue(e.target.value);
     }

  if (!checkStatus) {
    return <div>
      <span onDoubleClick={() => { setStatus(true) }}>{status}</span>
    </div>
  }

  return <div>
    <input autoFocus={true} onBlur={() =>{setStatus(false)}} value={status} onChange={onStatusChange} />
  </div>
}




export default MyStatus
