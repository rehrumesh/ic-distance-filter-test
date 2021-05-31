const { Customer, printCustomers, sortCustomersById } = require('./Customer');

describe('Customer Model tests', () => {
  describe('Object Creation tests', () => {
    it('Should throw if path is not provided', () => {
      expect(() => {
        new Customer();
      }).toThrow();
    });

    it('Should return a string when getInfo invoked', () => {
      const cust = new Customer('Test', '1', '1', '1');
      expect(cust.getInfo()).toBe('Test,1');
      expect(typeof cust.getInfo()).toBe('string');
    });
  });

  describe('printCustomers tests', () => {
    const c1 = new Customer('Test', '1', '1', '1');
    const c2 = new Customer('Test', '2', '1', '1');
    const c3 = new Customer('Test', '3', '1', '1');
    const arr = [c1, c2, c3];

    it('Should throw if proper customers are not provided', () => {
      expect(() => {
        printCustomers();
      }).toThrow();
    });

    it('Should return a string for a valid customer list', () => {
      const output = printCustomers(arr);
      const expectedOutput = 'Test,1\nTest,2\nTest,3';
      expect(output).toBe(expectedOutput);
    });
  });

  describe('sortCustomersById tests', () => {
    const c1 = new Customer('Test', '1', '1', '1');
    const c2 = new Customer('Test', '2', '1', '1');
    const c3 = new Customer('Test', '3', '1', '1');
    const arr = [c3, c2, c1];

    it('Should throw if proper customers are not provided', () => {
      expect(() => {
        sortCustomersById();
      }).toThrow();
    });

    it('Should return a string for a valid customer list', () => {
      const output = sortCustomersById(arr);

      expect(output[0]).toBe(c1);
      expect(output[1]).toBe(c2);
      expect(output[2]).toBe(c3);
    });
  });
});
