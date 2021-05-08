const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (passTimes) => {
  passTimes.forEach((time) => {
  const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  })
};


nextISSTimesForMyLocation((err, times) => {
    if (err) {
      console.log("It didn't work!" , error);
      return;
    } else {
      printPassTimes(times);
    }
  });