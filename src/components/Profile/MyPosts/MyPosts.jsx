import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData =[
    {id: 1, message: 'Dima', likesCount:12},
    {id: 2, message: 'its my first app', likesCount:15},
    // {id: 3, name: 'Ola'},
    // {id: 4, name: 'Anrdeya'},
    // {id: 5, name: 'Junior'},
    // {id: 6, name: 'Lena'},
    // {id: 7, name: 'Anrdeya'},
  ];

  let postsElements = postsData.map(post =>( <Post message ={post.message} likeCount={post.likeCount}/> ));

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