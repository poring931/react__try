import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {rerenderEntireTree} from './render'; решили делать так. потом передумали
import store from './components/redux/state';
// import { addPost, updateNewPostText } from './components/redux/state';


// ReactDOM.render(<App postsData={state.postsData} messagesData={state.messagesData} dialogsData={state.dialogsData}/>, document.getElementById('root'));



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={store.getState()}  dispatch={store.dispatch.bind(store)}/>, document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())


store.subscribe(rerenderEntireTree);//паттерн слушатель

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
