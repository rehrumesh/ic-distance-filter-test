const { getDistanceBetweenCoordinates } = require('./GeoHelpers');

describe('GeoHelpers tests', () => {
  it('Should throw if path is not provided', () => {
    expect(() => {
      getDistanceBetweenCoordinates();
    }).toThrow();

    expect(() => {
      getDistanceBetweenCoordinates(1);
    }).toThrow();

    expect(() => {
      getDistanceBetweenCoordinates(1, 1);
    }).toThrow();

    expect(() => {
      getDistanceBetweenCoordinates(1, 1, 1);
    }).toThrow();
  });

  it('Should return a number for valid input', () => {
    expect(
      typeof getDistanceBetweenCoordinates(
        52.986375,
        -6.043701,
        53.339428,
        -6.257664
      )
    ).toBe('number');
  });

  it('Should return a number for valid input', () => {
    expect(
      getDistanceBetweenCoordinates(52.986375, -6.043701, 53.339428, -6.257664)
    ).toBe(70.79115745578645);
  });
});
