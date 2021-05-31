const { getDistanceBetweenCoordinates } = require('./lib/GeoHelper/GeoHelpers');
const { sortCustomersById } = require('./models/Customer');

/**
 * reutrns an array of customers within a distance from a given point
 *
 * @param {Customer} customers list of custoemrs
 * @param {number} distance distance from point
 * @param {number} latitude latitude of the relative point
 * @param {number} longitude longitude of the relative point
 */
const getCustomersWithinDistance = (
  customers,
  distance,
  latitude,
  longitude
) => {
  if ((!customers, !distance, !latitude, !longitude)) {
    throw new Error('Invalid arguments');
  }

  let output = [];
  customers.forEach((c) => {
    const tmpDistance = getDistanceBetweenCoordinates(
      c.latitude,
      c.longitude,
      latitude,
      longitude
    );

    if (tmpDistance <= distance) {
      output.push(c);
    }
  });

  return sortCustomersById(output);
};

module.exports = {
  getCustomersWithinDistance,
};
