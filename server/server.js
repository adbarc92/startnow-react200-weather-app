const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:_city', (req, res) => {
  axios({
    method: 'get',
    url: `api.openweathermap.org/data/2.5/weather?q=${req.params._city}&APPID=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`,
  }).then(response => {
    res.status(200).send(response.data);
  })
});

module.exports = app;
