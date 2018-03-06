'use strict';

const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser').urlencoded({ extended: true });
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

const GphApiClient = require('giphy-js-sdk-core');
const giphyClient = GphApiClient('xk0HVLfMh4AZmhJfMyrHU24geAXl9FEe');

app.use(cors());

app.use(express.static('./public'));


app.get('/', (req, res) => res.sendFile('index.html', { root: './public' }));

app.get('/api/v1/gif/random', (req, res) => {
  console.log(req.query);
  giphyClient.random('gifs', { "tag": `${req.query.tag}` })
    .then((response) => {
      //put callback here
      console.log(response.data.images.original.gif_url);
      res.send(response.data.images.original.gif_url);
    })
    .catch(console.error);
});

app.post('/addUser', bodyParser, (req, res) => {
  let { username, tagArray } = req.body;
  client.query(`INSERT INTO users(username, responses) VALUES ($1, $2);`, [username, tagArray])
    .then()
    .catch (console.err);
});

app.get('*', (req, res) => res.sendFile('index.html', { root: './public' }));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));