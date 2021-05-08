const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(result => console.log(result))
  .catch((error) => {
    console.log("Error: ", error.message);
  });