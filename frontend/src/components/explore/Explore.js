import React, { useState } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import CountryCard from '../country-card/CountryCard';

import './Explore.css';

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;

  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

const Explore = ({ countries }) => {
  const [ search, setSearch ] = useState()
  const filteredCountries = shuffle(countries).filter(country => {
    return !search || country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  });

  return <>
    <div className="explore__content">
      <Header />
        <form className="country--search-form">
          <input className="search__field" placeholder="Country Name" onChange={e => {
            setSearch(e.target.value)
          }}></input>
          <button className="search--btn">Search</button>
        </form>

        <main className="country__gallery">
            {filteredCountries.slice(0, 10).map(country => <CountryCard name={country.name} />)}
        </main>
      <Footer />
    </div>
  </>
};

export default Explore;
