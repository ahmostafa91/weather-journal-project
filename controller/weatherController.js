// Require project data model (projectData object)
const projectData = require("../models/projectData");

// Post Middleware
exports.postWeather = (req, res, next) => {
  // Add Data to projectData object
  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.userresponse;
  projectData.newProp = req.body.userresponse;
  // go to next middleware
  next();
  // console.log(projectData);
};

// Get Middleware
exports.getWeather = (req, res, next) => {
  res.send(JSON.stringify(projectData));
};

// console.log(projectData);
