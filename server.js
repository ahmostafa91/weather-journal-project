// Require Core Node Module
const path = require('path');

// Require express - bodyParser - cors - port (Global Variables)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

// Require Project Router
const router = require('./routes/routes');

// Init express Instance
const app = express();

// Middlewares

// Configure express (path)
app.use(express.static(path.join(__dirname, 'views', 'website')));
// Configure express (bodyParser)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Configure express (cors)
app.use(cors());

// Configure express (using project routes)
app.use(router);


// Setup Server
const portListenerFunc = () => {
  console.log("server is listening on port:", port);
};
// Callback Function For Server Listening
const server = app.listen(port, portListenerFunc);

