import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Service from './Pages/Service';
import Skills from './Pages/Skills';
import Main from './Pages/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);


reportWebVitals();
