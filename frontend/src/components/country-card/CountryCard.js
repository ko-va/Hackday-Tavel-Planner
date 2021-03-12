import React from 'react';

import './CountryCard.css';

const CountryCard = ({ name }) => (
  <>
    <header className="country__name" onClick={() => {
      window.location = '/country/' + name
    }}>
      <h2>{name}</h2>
    </header>
  </>
);

export default CountryCard;
