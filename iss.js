const request = require("request");

const fetchMyIP = (callback) => {
  // use request to fetch our IP address from JSON API
  const ipifyUrl = "https://api.ipify.org?format=json"; // ex return {"ip": "123.123.123.123"}

  request(ipifyUrl, (err, res, body) => {
    if (err) {
      return callback(`Couldn't find IP due to: ${err}`, null);
    } else {
      const myIP = JSON.parse(body).ip;
      return callback(null, myIP);
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (err, res, body) => {
    if (err) {
      return callback(`Didn't work boss: ${err}`, null)
    } else {
      const data = JSON.parse(body)
      const lat = data.latitude
      const lon = data.longitude

      return callback(null, [lat, lon])
    }
  })
}

module.exports = { fetchCoordsByIP };
