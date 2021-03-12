import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FrontPage from '../front-page/FrontPage';
import Explore from '../explore/Explore';
import Country from '../country/Country';
import About from '../about/About';


import './App.css';

const api = 'http://localhost:5000';

const App = () => {

  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    fetch(api + '/countries')
      .then(response => response.json())
      .then(response => {
      setCountries(response)
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Switch>

            <Route exact path='/'>
              <FrontPage />
            </Route>

            <Route exact path='/about'>
              <About />
            </Route>

            <Route path='/explore'>
              <Explore countries={countries} />
            </Route>

            <Route path='/country/:name'>
              <Country />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
