import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileCss from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => { 
    return (
      <div >
        <ProfileInfo/>
        <MyPosts newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} postsData={props.profilePage.postsData} addPost={props.addPost}/>  
      </div>
    )
}

export default Profile;