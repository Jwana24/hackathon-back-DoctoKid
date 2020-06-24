const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;  
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connection = require('./config.js')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'))

app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
  });