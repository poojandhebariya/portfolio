import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Pages/Main';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Service from './Pages/Service';
import Project from './Pages/Project';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App bg-dark-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
