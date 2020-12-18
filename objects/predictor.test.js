import Car from './car';
import Predictor from './predictor';

describe('#isRestrictedHour', () => {
  const car = new Car(9);
  const predictor = new Predictor(car, 5, '19:30');

  test('should return true after pass a restricted last plate number in a specific day ', () => {
    expect(predictor.isRestrictedDay()).toBeTruthy();
  });

  const car1 = new Car(8);
  const predictor1 = new Predictor(car1, 5, '19:30');
  test('should return false when pass a non restricted day ', () => {
    expect(predictor1.isRestrictedDay()).toBeFalsy();
  });

  test('should return false when pass non restricted last plate number in a specific day ', () => {
    expect(predictor1.isRestrictedDay()).toBeFalsy();
  });
});


describe('#isRestrictedHour', () => {
  const car = new Car(6);
  const predictor = new Predictor(car, 9, '19:30');
  test('should return true after pass a restricted hour', () => {
    expect(predictor.isRestrictedHour()).toBeTruthy();
  });

  test('should return false after pass a non restricted hour', () => {
    const predictor = new Predictor(car, 9, '13:00');
    expect(predictor.isRestrictedHour()).toBeFalsy();
  });
});