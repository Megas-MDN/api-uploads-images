const express = require('express');
const { config } = require('dotenv');
config();
const cors = require('cors');
const db = require('./db');
const router = require('./routes');

const app = express();
app.use(cors());

app.use(express.json());
const port = process.env.PORT || 3001;

app.use(router);

db().then(() => {
  app.listen(port, () => {
    console.log('Server ON :: %s', port);
  });
});
