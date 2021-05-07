import React from 'react';
import StoreContext from '../../../StoreContext.js';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profile_reducer.js';
import MyPosts from './MyPosts.jsx';



const MyPostsContainer = (props) => {
    // let state = props.store.getState();
  
  // let addPost = () =>{
  //   props.store.dispatch(addPostActionCreator())
  // }
  // let onPostChange = (text)=>{
  //   let action = updateNewPostActionCreator(text);
  //   props.store.dispatch(action)
  // }
    return (
      <StoreContext.Consumer>
        {
        store =>{
          // <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData}  newPostText={state.profilePage.newPostText}/>
          let state = store.getState();
          let addPost = () =>{
            store.dispatch(addPostActionCreator())
          }
          let onPostChange = (text)=>{
            let action = updateNewPostActionCreator(text);
            store.dispatch(action)
          }
          return <MyPosts 
                    updateNewPostText={onPostChange} 
                    addPost={addPost} 
                    postsData={state.profilePage.postsData}  
                    newPostText={state.profilePage.newPostText}/>
        }
          
      
        }
      </StoreContext.Consumer>
    )
 
}

export default MyPostsContainer;