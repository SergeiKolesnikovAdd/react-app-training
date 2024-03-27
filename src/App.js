import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <div className="App">
        <Header/>
        <div className='content'>
          <Navbar/>
          {/* <Content/> */}
          <Routes>
            <Route path='/Dialogs' element={<Dialogs/>} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/News' element={<News/>} />
            <Route path='/Music' element={<Music/>} />
            <Route path='/Settings' element={<Settings/>} />
          </Routes>
        </div>
        

    </div>
  );
}

export default App;
