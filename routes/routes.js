// Configure express
const express = require('express');

// Configure express Router()
const router = express.Router();

// Require The Controller "weatherController middlewares logic"
const weatherControllers = require('../controller/weatherController');

// routers
router.post("/", weatherControllers.postWeather);
router.get('/all', weatherControllers.getWeather);

module.exports = router;