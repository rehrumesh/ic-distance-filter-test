const { EARTH_RADIUS } = require('../../constants');
const { toRadians } = require('../MathHelper/MathHelpers');

/**
 * Calculates the distance between two points according to the algorithem
 * given in below URL:
 *
 * https://en.wikipedia.org/wiki/Great-circle_distance
 *
 * @param {number} latitude1 latitude of point 1
 * @param {number} longitude1 longitude of point 1
 * @param {number} latitude2 latitude of point 2
 * @param {number} longitude2 longitude of point 2
 * @returns the distance in KM
 */
const getDistanceBetweenCoordinates = (
  latitude1,
  longitude1,
  latitude2,
  longitude2
) => {
  if (!latitude1 || !longitude1 || !latitude2 || !longitude2) {
    throw new Error('Invalid Arguments');
  }

  const radianLatitude1 = toRadians(latitude1);
  const radianLongitude1 = toRadians(longitude1);
  const radianLatitude2 = toRadians(latitude2);
  const radianLongitude2 = toRadians(longitude2);

  const longitudeDifference = Math.abs(radianLongitude1 - radianLongitude2);

  const sinComponent = Math.sin(radianLatitude1) * Math.sin(radianLatitude2);
  const cosComponent =
    Math.cos(radianLatitude1) *
    Math.cos(radianLatitude2) *
    Math.cos(longitudeDifference);

  const centralAngle = Math.acos(sinComponent + cosComponent);
  const arcLength = EARTH_RADIUS * centralAngle;

  return arcLength;
};

module.exports = {
  getDistanceBetweenCoordinates,
};
