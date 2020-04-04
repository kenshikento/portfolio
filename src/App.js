import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter , Route }  from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route exact path='/' component = { Home }/>
      <Route path='/contact' component = { Contact }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
