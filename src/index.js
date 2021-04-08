import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: 11, name: 'Dima'},
    {id: 22, name: 'Lena'},
    {id: 33, name: 'Ola'},
    {id: 44, name: 'Anrdeya'},
    {id: 55, name: 'Junior'},
    {id: 66, name: 'Lena'},
    {id: 77, name: 'Anrdeya'},
  ];
  let messagesData = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'how are you'},
    {id: 3, message: 'asdfasdasdasd'},
    {id: 4, message: 'thanks im fine'},
    {id: 5, message: 'sit down please'},
    {id: 6, message: 'Lesssadsasdasdna'},
    {id: 7, message: 'Anrasdasdasdasdasdasddeya'},
  ];
  
  let postsData =[
    {id: 111, message: 'Dima', likeCount: 12},
    {id: 222, message: 'its my first app', likeCount: 15},
    {id: 333, message: 'Ola'},
    {id: 444, message: 'Anrdeya'},
    {id: 555, message: 'Junior'},
    {id: 666, message: 'Lena'},
    {id: 777, message: 'Anrdeya'},
  ];


ReactDOM.render(<App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
