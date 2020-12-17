/* eslint-disable no-underscore-dangle */
class Predictor {
  constructor(car, day, hour) {
    this._car = car;
    this._day = day;
    this._hour = hour;
  }

  get isRestrictedDay() {
    if (this._day === 6 || this._day === 0) return false;
    const restrictions = {
      1: [1, 2],
      2: [3, 4],
      3: [5, 6],
      4: [7, 8],
      5: [9, 0],
    };
    return restrictions[this._day].includes(this._car.plate);
  }

  get isRestrictedHour() {
    return (this._hour >= '07:00' && this._hour <= '09:30') || (this._hour >= '16:00' && this._hour <= '19:30');
  }
}