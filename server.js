'use strict';

const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
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


app.get('/', (req, res) => res.sendFile('index.html', {root:'./public'}));

// // get route with no login to retrieve new gif
// app.get('/api/v1/gif/random', (req, res) => {
//   giphyClient.random('gifs', {"tag": 'yes'})
//     .then((response) => {
//     //put callback here
//       console.log(response.data.images.original.gif_url);
//       res.send(response.data.images.original.gif_url);
//     })
//     .catch(console.error);
// });

// get route with login
app.get('/api/v1/gif/random', (req, res) => {
  console.log('req query:', req.query.questionText);
  giphyClient.random('gifs', {"tag": `${req.query.tag}`})
    .then((response) => {
    //put callback here
      console.log(response.data.images.original.gif_url);
      res.send(response.data.images.original.gif_url);
      return response;
    })
    .catch(console.error)
    .then((response) => {
      console.log('hit .then response');
      client.query(`
      INSERT INTO questions(gif, questions) VALUES($1, $2)`, [response.data.images.original.gif_url, req.query.questionText]
      );
      return response;
    })
    // .then(results => res.sendStatus(201))
    .catch(console.error);
});


//history
app.get('/api/v1/games', (req, res) => {
  client.query(`SELECT id, questions, gif, userId, location FROM questions;`)
    .then(results => res.send(results.rows))
    // .then(results => console.log(results.rows))
    .catch(console.error);
});





app.get('*', (req, res) => res.sendFile('index.html', {root:'./public'}));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));