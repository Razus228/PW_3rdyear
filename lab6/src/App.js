import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Trending from './Trending';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favourite from './Favourites';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';






function App() {


  const [isDarkMode, setIsDarkMode] = useState(true);

  


  return (
    
    
      
      <BrowserRouter >
        
        <div className="App" >
          <Navbar/>
          
          

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              
            </Routes>
            <Routes>
              <Route path="/trending" element={<Trending />} />
            </Routes>
            <Routes>
              <Route path="/favourites" element={<Favourite/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    
  );
}

export default App;
