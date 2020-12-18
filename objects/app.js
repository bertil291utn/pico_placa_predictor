/* eslint-disable import/extensions */
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
  result.innerHTML = carNotRoad ? 'Time to take the bus, or find a carpool or better yet ride your bike' : 'Check if you have gas 🚗';
});