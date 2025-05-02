import { useState } from 'react'
import './App.css'
import Header from './components/Header';

import MainNavbar from './components/Navigation';
import Home from './Pages/Home';


function App() {


  return (
    <>
    <Header /> 
    <MainNavbar />
    <Home />
    </>
  )
}

export default App
