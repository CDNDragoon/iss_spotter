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

module.exports = { fetchMyIP };
