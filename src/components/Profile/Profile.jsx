import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileCss from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => { 
    return (
      <div >
        <ProfileInfo/>
        {/* <MyPostsContainer store={props.store} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} postsData={props.profilePage.postsData}/>   */}
        <MyPostsContainer store={props.store}/>  
      </div>
    )
}

export default Profile;