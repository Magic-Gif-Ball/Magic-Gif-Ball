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

//get id from other table (corresponds to userid), so that the table knows what to do
//possibly have to do query 1 query 2 stuff

// Getting user_id from users table that will be passed into question table specifically userid colunm.

// function queryOne() {
//   client.query(`SELECT users_id FROM users WHERE hfjkdfhs`);
//   console.log(req)
//     .then(results => res.send(results.rows))
//     // .then(results => console.log(results.rows))
//     .catch(console.error);
// }

// get route with login
app.get('/api/v1/gif/random', (req, res) => {
  giphyClient.random('gifs', { "tag": `${req.query.tag}` })
    .then((response) => {
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
  client.query(`SELECT questions_id, questions, gif, userid, location FROM questions;`)
    .then(results => res.send(results.rows))
    // .then(results => console.log(results.rows))
    .catch(console.error);
});

// display user specific history
//
// maybe need a second route?
//yes
//
//Drop one table and rebuild
//rename id, make it unique
app.get('/api/v1/userHistory/:username', (req, res) => {
  console.log(req.params.username);
  client.query(`SELECT questions_id, questions, gif, userid FROM questions INNER JOIN users ON questions.userid=users.users_id WHERE username=${req.params.username};`)
    .then(results => res.send(results.rows))
    // .then(results => console.log(results.rows))
    .catch(console.error);
});



app.post('/addUser', bodyParser, (req, res) => {
  let { username, tagArray } = req.body;
  client.query(`INSERT INTO users(username, tag_array) VALUES ($1, $2) ON CONFLICT DO NOTHING;`, [username, tagArray])
    .then((result) => {
      if (result.rowCount === 0) {
        client.query(`SELECT users.tag_array FROM users WHERE username='${username}';`)
          .then((resultArray) => res.send(resultArray.rows[0].tag_array))
          .catch(console.err);
      }
    })
    .catch(console.err);
});

app.get('*', (req, res) => res.sendFile('index.html', { root: './public' }));

loadDB();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// env variables for testing locally
// export PORT=3000
// export DATABASE_URL=postgres://localhost:5432/magic_gif_ball

//lab 9
//create function loadDB
//client.query
//client.query
//no .then
//have a .catch to console.log errors

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    users (
      users_id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      date DATE,
      tag_array TEXT
    );`
  )
    .catch(console.error);

  client.query(`
    CREATE TABLE IF NOT EXISTS
    questions (
      questions_id SERIAL PRIMARY KEY,
      questions TEXT,
      gif VARCHAR (250),
      userid INTEGER NOT NULL REFERENCES users(users_id),
      location VARCHAR(250)
    );`
  )
    .catch(console.error);

}