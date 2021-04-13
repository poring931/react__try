import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost } from './components/redux/state';


// ReactDOM.render(<App postsData={state.postsData} messagesData={state.messagesData} dialogsData={state.dialogsData}/>, document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
}


