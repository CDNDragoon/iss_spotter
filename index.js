const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('76.71.153.195', (error, coords) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
  
    console.log('It worked! Returned coords:' , coords);
  });