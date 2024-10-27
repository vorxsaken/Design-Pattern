class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  info() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

export { Car };
