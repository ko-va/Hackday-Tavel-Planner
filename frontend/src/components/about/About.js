import React from 'react';

import Footer from '../footer/Footer';

import './About.css';

const About = () => (
  <>
    <div className="about__content">
        <h1 className="about__header">Yūgen</h1>
        <p>(幽玄) – Japanese</p>
        <div className="about__desc">
          <h2>An awareness of the Universe that triggers emotional responses too deep and powerful for words</h2>
          <blockquote><i>"To watch the sun sink behind a flower clad hill. To wander on in a huge forest without thought of return. To stand upon the shore and gaze after a boat that disappears behind distant islands. To contemplate the flight of wild geese seen and lost among the clouds…"</i></blockquote>
          <h5>Zeami Motokiyo</h5>
        </div>
      <Footer />
    </div>
  </>

);

export default About;