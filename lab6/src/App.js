import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Trending from './Trending';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
          <Routes>
            <Route path="/trending" element={<Trending />} />
          </Routes>

          <Trending />
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
