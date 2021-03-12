const { response } = require('express');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = 5000;

app.use(cors());

const fetchCountriesData = async () => {
  const response = await fetch('https://travelbriefing.org/countries.json');
  const data = await response.json();
  
  return data;
};

const fetchCountryDetails = async url => {
  const response = await fetch(url);
  const data = await response.json();
  
  return data;
};

const fetchCountryImage = async name => {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${name}&per_page=1`, {
    headers: {
      'Authorization': '563492ad6f9170000100000184b66250a7eb4d7b9ffdcfb9c3cf85f0',
    },
  });

  const data = await response.json();
  
  return data;
};

app.get('/countries', async (req, res) => {
  const countries = await fetchCountriesData();

  res.send(countries.map(country => ({
    name: country.name,
  })));
});

app.get('/countries/:name', async (req, res) => {
  const countryName = req.params.name;
  console.log(countryName);
  const countries = await fetchCountriesData();
  const { name, url } = countries.find(c => c.name === countryName);
  const details = await fetchCountryDetails(url);
  const { photos } = await fetchCountryImage(name);
  const response = { name };

  if ((photos || []).length > 0) {
    const { src, photographer } = photos[0]
    response.photo = {
      url: src.landscape,
      photographer,
    }
  }

  response.currency = { code: details.currency.code }
  response.coordinates = details.maps
  response.timezone = details.timezone

  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
