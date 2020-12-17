class Car {
  constructor(plate) {
    this._plate = plate;
  }

  get plate() {
    return this._plate;
  }

  set plate(value) {
    this._plate = value;
  }
}