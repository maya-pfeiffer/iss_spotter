const { nextISSTimesForMyLocations } = require('./iss');

const printTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocations((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printTimes(times);
});

module.exports = { printTimes };