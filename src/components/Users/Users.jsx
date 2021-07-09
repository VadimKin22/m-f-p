import React from 'react';
import ucss from './Users.module.css';
import userPhoto from "./../../img/ava.jpg"
import { NavLink } from 'react-router-dom';
let Users = ({usersPage, getUsers, setCurPage, userUnfollow, userFollow}) => {
  let pages = (currentPage, totalPages) => {
    let curArr = [];
    if (currentPage <= 4) {
      curArr = [1, 2, 3, 4, 5, "...", totalPages]
    } else if ((currentPage + 3) >= totalPages) {
      curArr = [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    } else {
      for (let i = currentPage - 2; i <= currentPage + 3; i++) {
        curArr.push(i)
      }
      curArr = [1, "...", ...curArr, "...", totalPages]
    }
    return curArr
  }
  
  return <div className={ucss.users_wrapper}>
    <div className={ucss.pages_list}>
      {pages(usersPage.currentPage, usersPage.totalPages).map(n =>
        // <NavLink to={"/users/page=" + n}>
        <span>
          {usersPage.currentPage == n ? <span className={ucss.changePage}
            onClick={() => {getUsers(n)}}>{n} </span>
            : n == "..." ? <span>{n}</span> : <span onClick={() => {getUsers(n); setCurPage(n)}}>{n} </span>
          }
        </span>
        // </NavLink>
      )}
    </div>
    
    <div className={ucss.users_list}>
      {usersPage.users.map(u => <>
        
        <NavLink to={"/profile/" + u.id}>
          {u.photos.small == null ? <img src={userPhoto}
            className={ucss.userAnanimAva} />
            : <img src={u.photos.small} />
          }
          <div>{u.name}</div>
        </NavLink>
        
        <div className={ucss.follow_buttons}>
          {u.followed ? <button disabled={usersPage.pressingNumBut.some(id=>id==u.id)} onClick={() => {userUnfollow(u.id)  }}>
             unfollow </button>
         
            :  <button disabled={usersPage.pressingNumBut.some(id=>id==u.id)} onClick={() => {userFollow(u.id)}}> 
            follow </button>
          }
        </div>
      </>)}

    </div>
  </div>
}




export default Users