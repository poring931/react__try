import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements = props.postsData.map(post =>( <Post key={post.id} message ={post.message} likeCount={post.likeCount}/> ));

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <button>Add post</button>
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