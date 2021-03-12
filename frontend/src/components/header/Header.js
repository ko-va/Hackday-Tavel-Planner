import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';


const Header = () => (
  <header className="nav">
    <div className="nav__header">
        <div className="logo-image">
          <Link to="/"><h1>Yūgen</h1></Link>
        </div>
        <div className="nav--routes">
          <Link to="/about"><h3 className="route">About</h3></Link>
        </div>
    </div>
  </header>
);

export default Header;