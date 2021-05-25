import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }else{
        dispatch(logout())
      }
    })
  },[]);
  const user = useSelector(selectUser)
  return (
    <div className="app">
      {/*Header */}
      <Header />

      {!user ? (<Login/>):(
        <div className="app__body">
        <Sidebar />
          <Feed />
          <Widgets />
      </div>
      )
      }
      
      {/*App Body */}
    </div>
  );
}

export default App;
