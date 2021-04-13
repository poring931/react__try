// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render';
import state from './components/redux/state';


// ReactDOM.render(<App postsData={state.postsData} messagesData={state.messagesData} dialogsData={state.dialogsData}/>, document.getElementById('root'));


rerenderEntireTree(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
