import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/> */}

          {/* <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />}/> */}
          <Route path="/dialogs" render={() => <DialogsContainer  />}/>
          {/* <Route path="/profile" render={() => <Profile  profilePage={props.state.profilePage} dispatch={props.dispatch} />}/> */}
          <Route path="/profile" render={() => <Profile  />}/>
          {/* <Route path="/profile" render={() => <Profile  store={props.store} />}/> */}
          {/* <Dialogs />  */}
        </div>
        {/*<Profile />*/}
      </div>
    </BrowserRouter>
    );
    
}

export default App;