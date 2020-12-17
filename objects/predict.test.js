const { isRestrictedDay, isRestrictedHour } = require('./logicfunctions');

describe('#isRestrictedHour', () => {
  test('should return true after pass a restricted last plate number in a specific day ', () => {
    expect(isRestrictedDay(5, 9)).toBeTruthy();
  });

  test('should return false when pass a non restricted day ', () => {
    expect(isRestrictedDay(6, 9)).toBeFalsy();
  });

  test('should return false when pass non restricted last plate number in a specific day ', () => {
    expect(isRestrictedDay(4, 0)).toBeFalsy();
  });
});


describe('#isRestrictedHour', () => {
  test('should return true after pass a restricted hour', () => {
    expect(isRestrictedHour('07:00')).toBeTruthy();
  });

  test('should return false after pass a non restricted hour', () => {
    expect(isRestrictedHour('11:00')).toBeFalsy();
  });
});