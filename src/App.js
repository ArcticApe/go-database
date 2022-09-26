import React from 'react';
import { Header, Footer } from './components/common';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import Cuisine from './pages/Cuisine';
import Career from './pages/Career';
import Expedition from './pages/Expedition';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/cuisine' element={<Cuisine />} />
          <Route path='/career' element={<Career />} />
          <Route path='/expedition' element={<Expedition />} />
        </Routes>
      </BrowserRouter>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
