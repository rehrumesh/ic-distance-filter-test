const { CUSTOMERS_FILE_PATH } = require('../../constants');
const { readFile, writeFile, mapLinesToJSONArray } = require('./IOHelpers');

describe('IOHelper tests', () => {
  describe('readFile tests', () => {
    it('Should throw if path is not provided', () => {
      expect(() => {
        readFile();
      }).toThrow();
    });

    it('Should return a string for a valid path', () => {
      expect(typeof readFile(CUSTOMERS_FILE_PATH)).toBe('string');
    });
  });

  describe('writeFile tests', () => {
    it('Should throw if path is not provided', () => {
      expect(() => {
        writeFile();
      }).toThrow();
    });

    it('Should throw if content is not provided', () => {
      expect(() => {
        writeFile('./test');
      }).toThrow();
    });
  });

  describe('mapLinesToJSONArray tests', () => {
    it('Should throw if content is not provided', () => {
      expect(() => {
        mapLinesToJSONArray();
      }).toThrow();
    });

    it('Should return an error if string is not a valid JSON', () => {
      expect(() => {
        mapLinesToJSONArray('Hello world');
      }).toThrow(Error);
    });

    it('Should return an array if valid JSON string is provided', () => {
      expect(Array.isArray(mapLinesToJSONArray('{"age":10}'))).toBe(true);
    });
  });
});
