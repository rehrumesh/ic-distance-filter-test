const { getCustomersWithinDistance } = require('./IntercomEvent');
const { Customer } = require('./models/Customer');

const testDistance = 100;
const testPoint = {
  latitude: 53.339428,
  longitude: -6.257664,
};
const c1 = new Customer('C1', 1, 52.986375, 6.043701); // more than 100KM
const c2 = new Customer('C2', 14, 53.2451022, -6.238335); // less than 100KM
const c3 = new Customer('C3', 5, 53.1302756, -6.2397222); // less than 100KM
const testCustomers = [c1, c2, c3];

describe('IntercomEvent tests', () => {
  describe('getCustomersWithinDistance tests', () => {
    it('should throw an error for invalid arguments', () => {
      expect(() => {
        getCustomersWithinDistance();
      }).toThrow();
      expect(() => {
        getCustomersWithinDistance(testCustomers);
      }).toThrow();
      expect(() => {
        getCustomersWithinDistance(testCustomers, testDistance);
      }).toThrow();
      expect(() => {
        getCustomersWithinDistance(
          testCustomers,
          testDistance,
          testPoint.latitude
        );
      }).toThrow();
    });

    it('should give correct output', () => {
      const output = getCustomersWithinDistance(
        testCustomers,
        testDistance,
        testPoint.latitude,
        testPoint.longitude
      );
      expect(output.length).toBe(2);
      expect(output[0]).toBe(c3);
      expect(output[1]).toBe(c2);
    });
  });
});
