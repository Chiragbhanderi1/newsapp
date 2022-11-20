import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Health from './components/Health'
import Science from './components/Science'
import Sports from './components/Sports'
import Technology from './components/Technology'
import Business from './components/Business'
import Entertainment  from './components/Entertainment'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App=()=>{
  const[progress,setProgress]= useState(0)
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar color='#f11946' progress={progress}/>
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress}/>} />
          <Route path="/business" element={<Business setProgress={setProgress}/>}/>
          <Route path="/entertainment" element={<Entertainment setProgress={setProgress}/>}/>
          <Route path="/health" element={<Health setProgress={setProgress}/>}/>
          <Route path="/science" element={<Science setProgress={setProgress}/>}/>
          <Route path="/sports" element={<Sports setProgress={setProgress}/>}/>
          <Route path="/technology" element={<Technology setProgress={setProgress}/>}/>
        </Routes>
        </Router>
      </div>
    )
  
}
export default App