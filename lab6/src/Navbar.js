import React from "react";
import { Button } from "reactstrap";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar ">
            <h1><Link to = "/" style={{padding: '0%', color: '#37b6c7'}}>Nicomoonie</Link></h1>
            <div className="links ">
                <a href="/">Search</a>
                <a href="/trending">Trending</a>
                <a href="/favourites">Favourites</a>
            </div>
        </nav>
     );
}
 
export default Navbar;