import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/> */}

          <Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
          <Route path="/profile"render={() => <Profile postsData={props.postsData}/>}/>
          {/* <Dialogs />  */}
        </div>
        {/*<Profile />*/}
      </div>
    </BrowserRouter>
    );
    
}

export default App;