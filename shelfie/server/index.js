const express = require('express'),
      bodyParser = require('body-parser'),
      controller = require('./controller'),
      massive = require('massive');
      require('dotenv').config();





const app = express(),
      port = 3005;

app.use(bodyParser.json());






app.listen(port, ()=>console.log(`Listening to port ${port}`));
