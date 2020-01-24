import React from 'react';
import './App.css';
import { Route, BrowserRouter, } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import News from './Components/News';
import Navbar from './Components/CustomNavbar'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
