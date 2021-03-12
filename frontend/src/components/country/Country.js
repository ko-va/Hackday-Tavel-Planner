import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Country.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const api = 'http://localhost:5000';

const Country = props => {
  const { name } = useParams();
  const [ data, setData ] = useState();

  useEffect(() => {
    fetch(api + '/countries/' + name)
      .then(response => response.json())
      .then(response => {
        setData(response);
    });
  }, []);

  return <>
    <div className="country__desc" style={{
      backgroundImage: data ? `url(${data.photo.url})` : null
    }}>
      <Header />
        <header className="country-name">
          <h1>{name}</h1>
        </header>

        {data && <>        
          <main className="country__content">
            <p className="country__feature">Currency: {data.currency.code}</p>
            <p className="country__feature">Map: {data.coordinates.lat}, {data.coordinates.long}</p>
            <p className="country__feature">Timezone: {data.timezone.name}</p>
          </main>
        </>}
      <Footer />
    </div>
  </>
};

export default Country;
