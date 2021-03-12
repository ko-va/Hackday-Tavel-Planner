import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import './FrontPage.css';


const FrontPage = () => (
  <>
    <div className="Front-page__body">
      <Header />
        <h1 className="app__headline">Let's see Places</h1>
        <a href="/explore" className="app--btn">Explore</a>
      <Footer />
    </div>
  </>
);

export default FrontPage;