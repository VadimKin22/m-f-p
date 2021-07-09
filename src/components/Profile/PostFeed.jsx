import React from 'react';
import pcss from './Profile.module.css';
const PostFeed = (props) => {
      return  <div className={pcss.postsPar}>
    {props.posts.map(el =><div className={pcss.postsChild}>
    <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_FVrOe9h-wUQCe62IyIPXywcy7Hm71swhJM7a9=s32-c-mo"/>
    <p>{el.post}</p> 
    </div>)}
  </div>
  
}

export default PostFeed