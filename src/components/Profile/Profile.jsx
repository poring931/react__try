import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileCss from './Profile.module.css';

const Profile = () => {
    return <div className={ProfileCss.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div>
      ava + description
    </div>
  <MyPosts/>
  </div>
}

export default Profile;