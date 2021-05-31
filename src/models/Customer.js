/**
 * Customer class.
 *
 * @param {stirng} name
 * @param {string} userId
 * @param {string} latitude
 * @param {string} longitude
 */
function Customer(name, userId, latitude, longitude) {
  if (!name || !userId || !latitude || !longitude) {
    throw new Error('Invalid arguments');
  }

  this.name = name;
  this.userId = userId;
  this.latitude = latitude;
  this.longitude = longitude;

  /**
   *
   * @returns a stirng of customer name and user id
   */
  this.getInfo = function () {
    return this.name + ',' + this.userId;
  };
}

/**
 * Prints a string of customer info having one customer per line.
 *
 * @param {[Customer]} customers an array of customers
 * @returns {string} list of customers as a single string. For each line it will have customer name and user id.
 */
const printCustomers = (customers) => {
  if (!customers) throw new Error('Invalid Arguments');

  return customers.map((c) => c.getInfo()).join('\n');
};

/**
 * Sort a list of customers by user id
 *
 * @param {[Customer]} customers
 * @returns {[Customer]} an array of customers sorted by user id
 */
const sortCustomersById = (customers) => {
  if (!customers) throw new Error('Invalid Arguments');
  if (!Array.isArray(customers)) {
    throw new Error('Expects an array of customers');
  }

  return customers.sort((a, b) => (a.userId < b.userId ? -1 : 1));
};

module.exports = {
  Customer,
  printCustomers,
  sortCustomersById,
};
