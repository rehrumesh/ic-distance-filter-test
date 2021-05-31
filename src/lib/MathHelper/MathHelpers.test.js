const { toRadians } = require('./MathHelpers');

describe('MathHelper tests', () => {
  it('Should throw an error if invalid argument is passed', () => {
    expect(() => toRadians('invalid')).toThrow();
  });

  it('Should give a correct radian value', () => {
    let output = toRadians(1);
    expect(output).toBe(0.031415926535897934);
    expect(typeof output).toBe('number');
  });
});
