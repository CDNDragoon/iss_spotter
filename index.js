const { fetchISSFlyOverTimes } = require('./iss');

fetchISSFlyOverTimes({ latitude: 42.9515, longitude: -81.3386 }, (err, times) => {
    if (err) {
      console.log("It didn't work!" , error);
      return;
    } else {
      console.log(times);
    }
  });