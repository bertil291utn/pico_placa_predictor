/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
// class Car {
//   constructor(plate) {
//     this._plate = plate;
//   }

//   get plate() {
//     return this._plate;
//   }

//   set plate(value) {
//     this._plate = value;
//   }
// }


// class Predictor {
//   constructor(car, day, hour) {
//     this._car = car;
//     this._day = day;
//     this._hour = hour;
//   }

//   isRestrictedDay() {
//     if (this._day === 6 || this._day === 0) return false;
//     const restrictions = {
//       1: [1, 2],
//       2: [3, 4],
//       3: [5, 6],
//       4: [7, 8],
//       5: [9, 0],
//     };
//     return restrictions[this._day].includes(this._car.plate);
//   }

//   isRestrictedHour() {
//     return (this._hour >= '07:00' && this._hour <= '09:30') || (this._hour >= '16:00' && this._hour <= '19:30');
//   }
// }

import Car from './car.js';
import Predictor from './predictor.js';

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let plate = document.querySelector('#plate');
  let date = document.querySelector('#date');
  let hour = document.querySelector('#hour');
  const result = document.querySelector('#result');
  plate = plate.value;
  date = date.value;
  hour = hour.value;

  const lastPlateNumber = plate.slice(-1);
  const day = new Date(date).getDay();

  const car = new Car(+lastPlateNumber);
  const predictor = new Predictor(car, day, hour);
  const carNotRoad = predictor.isRestrictedDay() && predictor.isRestrictedHour();
  result.innerHTML = carNotRoad ? 'not road' : 'road';
});