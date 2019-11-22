import { Age } from './../src/super-galactic.js';

describe('Age', () => {
  let userAge = new Age(29,71);

  test('should correctly create an age object with current age', () => {
    expect(userAge.earthYears).toEqual(29);
  });

  test('should correctly create an age object with life expectancy age', () => {
    expect(userAge.lifeExpectancy).toEqual(71);
  });

  test('should correctly determine if age types are numbers', () => {
    expect(typeof userAge.earthYears && typeof userAge.lifeExpectancy).toEqual('number');
  });

  test('should correctly divide user age by 0.24 to determine age on Mercury', () => {
    expect(userAge.mercuryAge()).toEqual(121);
  });

  test('should correctly divide user age by 0.62 to determine age on Venus', () => {
    expect(userAge.venusAge()).toEqual(47);
  });

  test('should correctly divide user age by 1.88 to determine age on Mars', () => {
    expect(userAge.marsAge()).toEqual(15);
  });

  test('should correctly divide user age by 11.86 to determine age on Jupiter', () => {
    expect(userAge.jupiterAge()).toEqual(2);
  });

  test('should correctly subtract user age from life expectancy on Earth to determine life left on Earth', () => {
    expect(userAge.earthLife()).toEqual(42);
  });

  test('should correctly subtract user age from life expectancy on Earth and divide result by .24 to determine life left on Mercury', () => {
    expect(userAge.mercuryLife()).toEqual(175);
  });

  test('should correctly subtract user age from life expectancy on Earth and divide result by .62 to determine life left on Venus', () => {
    expect(userAge.venusLife()).toEqual(68);
  });

  test('should correctly subtract user age from life expectancy on Earth and divide result by 1.88 to determine life left on Mars', () => {
    expect(userAge.marsLife()).toEqual(22);
  });

  test('should correctly subtract user age from life expectancy on Earth and divide result by 11.86 to determine life left on Jupiter', () => {
    expect(userAge.jupiterLife()).toEqual(4);
  });

  test('if user is older than 71, should correctly subtract life expectancy (71) from user age to determine years lived past life expectancy', () => {
    let olderUserAge = new Age(80,71);
    expect(olderUserAge.yearsPastExpectancy()).toEqual(9);
  });
});
