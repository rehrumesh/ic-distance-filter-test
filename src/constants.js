const CUSTOMERS_FILE_PATH = './resources/customers.txt';
const OUTPUT_PATH = './resources/output.txt';
const THRESHOLD_DISTANCE = 100;
const EARTH_RADIUS = 6371.009; // Acording to https://en.wikipedia.org/wiki/Great-circle_distance
const DUBLIN_OFFICE = {
  latitude: 53.339428,
  longitude: -6.257664,
};

module.exports = {
  CUSTOMERS_FILE_PATH,
  DUBLIN_OFFICE,
  THRESHOLD_DISTANCE,
  EARTH_RADIUS,
  OUTPUT_PATH,
};
