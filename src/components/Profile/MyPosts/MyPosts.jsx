import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
      My posts
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
       <Post message ='Hi, how are u'/>
       <Post message = 'its my first app'/>
      </div>
    </div>
    )
 
}

export default MyPosts;