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

// get route with login
app.get('/api/v1/gif/random', (req, res) => {
  giphyClient.random('gifs', {"tag": `${req.query.tag}`})
    .then((response) => {
      res.send(response.data.images.original.gif_url);
      return response;
    })
    .catch(console.error)
    .then((response) => {
      console.log('hit .then response', req.query.questionText);
      client.query(`
      INSERT INTO questions(gif, questions, userid) VALUES($1, $2, $3)`, [response.data.images.original.gif_url, req.query.questionText, req.query.user]
      );
      return response;
    })
    // .then(results => res.sendStatus(201))
    .catch(console.error);
});

//history
app.get('/api/v1/games', (req, res) => {
  // console.log(req.query.user1);
  client.query(`SELECT * FROM questions
  WHERE userid=${req.query.user1}
  ;`)
    .then(results => res.send(results.rows))
    // .then(results => console.log(results.rows))
    .catch(console.error);
});

app.post('/addUser', bodyParser, (req, res) => {
  let {username, tagArray} = req.body;
  client.query(`INSERT INTO users(username, tag_array) VALUES ($1, $2) ON CONFLICT DO NOTHING;`, [username, tagArray])
    .then((result) => {
      // if (result.rowCount === 0) {
      client.query(`SELECT users.users_id, users.tag_array FROM users WHERE username='${username}';`)
        .then((resultArray) => res.send(resultArray.rows[0]))
        .catch(console.err);
      // }
    })
    .catch(console.err);
});

app.put('/api/v1/gif/update', bodyParser, (req, res) => {
  let {user_id, tagArray} = req.body;
  client.query(`UPDATE users SET tag_array=$1 WHERE users_id=$2;`, [tagArray, user_id])
    .then(res.sendStatus(201))
    .catch(console.err);
});


//-------------------------

//delete a gif from history
app.delete('/api/v1/games/:id', (req, res) => {
  client.query('DELETE FROM questions WHERE questions_id=$1', [req.params.id])
    .then(() => res.sendStatus(204))
    .catch(console.error);
});

app.get('*', (req, res) => res.sendFile('index.html', {root: './public'}));

loadDB();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    users(
      users_id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      date DATE,
      tag_array TEXT
    );`
  )
    .catch(console.error);

  client.query(`
    CREATE TABLE IF NOT EXISTS
    questions(
      questions_id SERIAL PRIMARY KEY,
      questions TEXT,
      gif VARCHAR (250),
      userid INTEGER NOT NULL REFERENCES users(users_id),
      location VARCHAR(250)
    );`
  )
    .catch(console.error);
}


// env variables for testing locally
// export PORT=3000
// export DATABASE_URL=postgres://localhost:5432/magic_gif_ball