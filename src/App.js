import './App.css';
import Header from './Components/Header';
import Main from './Pages/Main';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import Loader from '../src/Components/Loader';


function App() {

  

  return (
    <div className="App">
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
