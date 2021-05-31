/**
 * Converts degree value to a radian value
 * @param {number} degrees
 * @returns
 */
const toRadians = (degrees) => {
  if (!degrees || typeof degrees !== 'number') {
    throw new Error('Expects a number');
  }

  return (degrees * Math.PI) / 100;
};

module.exports = {
  toRadians,
};
