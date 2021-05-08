const request = require('request-promise-native');

// returns ip
const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

// ip => returns lat/lon
const fetchCoordsByIP = (body) => {
  return request(`https://ipvigilante.com/json/${JSON.parse(body).ip}`);
}

// lat/lon => returns iss flight times
const fetchISSFlyOverTimes = (body) => {
  const {latitude, longitude} = JSON.parse(body).data
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
}

// gets ip => gets lat/lon => gets iss flight times
const nextISSTimesForMyLocation = () => {
  // get ip
  return fetchMyIP()
  // ip => geo
    .then(fetchCoordsByIP)
  // geo => iss 
    .then(fetchISSFlyOverTimes)
  // format
    .then(result => JSON.parse(result).response)
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation }