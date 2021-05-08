const request = require("request");

const fetchMyIP = (callback) => {
  // use request to fetch our IP address from JSON API
  const ipifyUrl = "https://api.ipify.org?format=json"; // ex return {"ip": "123.123.123.123"}

  request(ipifyUrl, (err, res, body) => {
    if (err) {
      callback(`Couldn't find IP due to: ${err}`, null);
      return 
    } else {
      const myIP = JSON.parse(body).ip;
      callback(null, myIP);
      return 
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (err, res, body) => {
    if (err) {
      return callback(`Didn't work boss: ${err}`, null)
    } else {
      const data = JSON.parse(body)
      const latitude = data.latitude
      const longitude = data.longitude

      return callback(null, {latitude, longitude})
    }
  })
}

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  request(url, (err, res, body) => {
    if (err) { 
      callback(err, null);
      return;
    } else {
      // unpack the response into JSON
      const data = JSON.parse(body);
      // retrieve the response key from the data
      const overhead = data.response;
      callback(null, data);
      return;
    }
  })
};

module.exports = { fetchISSFlyOverTimes };
