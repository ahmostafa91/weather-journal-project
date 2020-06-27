/* Global Project Variables */
const appid = '219baaee4f24c58ea0a0b5ee9a6ae015'
const baseURL = 'api.openweathermap.org/data/2.5/weather?'
const postURL = 'http://localhost:3000'
const getURL = 'http://localhost:3000/all'
const zipInput = document.getElementById('zip');
const userInput = document.getElementById('feelings')
const tempHolder = document.getElementById('temp')
const dateHolder = document.getElementById('date')
const contentHolder = document.getElementById('content')

// create a new JS date instance
let date = new Date();
let newDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear();

// Call function to fetch via OpenWeatherMap
const getWeather = async (baseURL, zip, api) => {
  const url = `http://${baseURL}zip=${zip}&appid=${api}`
  const response = await fetch(url)
  let jsonResponse = await response.json()
  return jsonResponse
}

// User-input post data function
const postData = async (path, data = {}) => {
  const response = await fetch(path, {
    method: 'POST', 
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: JSON.stringify(data),
  })
}

// Update UI function 
const updateUI = async () => {
  const response = await fetch(getURL)
  const jsonResponse = await response.json()
  dateHolder.innerHTML = `<span class="entry-item">Date: </span>${jsonResponse.date}`
  contentHolder.innerHTML = `<span class="entry-item">You feel: </span>${jsonResponse.userResponse}`
  tempHolder.innerHTML = `<span class="entry-item">Temperature: </span>${jsonResponse.temperature}`
}

// Event handler handleClick
const handleClick = async () => {
  const weatherData = await getWeather(baseURL, zipInput.value, appid) // get data
  const data = {
    temperature: weatherData.main.temp,
    date: newDate,
    userresponse: userInput.value
  };
  await postData(postURL, data); // post data
  updateUI();
}

// Add element event listener with 'generate' id
const ele = document.getElementById('generate')
ele.addEventListener('click', handleClick)
