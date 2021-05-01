import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profile_reducer.js';
import MyPosts from './MyPosts.jsx';



const MyPostsContainer = (props) => {
    let state = props.store.getState();
  
  let addPost = () =>{
    props.store.dispatch(addPostActionCreator())
  }
  let onPostChange = (text)=>{
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action)
  }
    return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData}  newPostText={state.profilePage.newPostText}/>
    )
 
}

export default MyPostsContainer;