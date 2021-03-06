import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profile_reducer.js';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
//  console.log(props)
  debugger;
  let postsElements = props.postsData.map(p => <Post key={p.id} message = {p.message} likeCount = {p.likeCount}/> );

  let newPostElement = React.createRef();
 
  let onAddPost = () =>{
    props.addPost();
    // props.dispatch(addPostActionCreator())
    // props.dispatch('');
  }

  let onPostChange = ()=>{
    let text = newPostElement.current.value;
   props.updateNewPostText(text)
    // props.dispatch(updateNewPostActionCreator(text));
  }

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="10" value={props.newPostText}/>
            </div>
            <div>
              <button onClick={onAddPost}>Add post</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
    </div>
    )
 
}

export default MyPosts;