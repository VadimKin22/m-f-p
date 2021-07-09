import React from 'react';
const PostInput = React.memo(props => { // обернул memo, чтобы функция не перерисовывалась без необходимости несколько раз 
   return <div>
    Posts:
      <div>
      <textarea value={props.textNewPost} onChange={(e) => {props.textValue(e.target.value);}}  cols="50" rows="3"></textarea>
    </div>
    <div>
      <input onClick={() => {props.sendPost()}}  type="submit" value="Newpost"/>
    </div>
  </div>
})

export default PostInput