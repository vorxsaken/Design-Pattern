import { Car } from "./car.js";

const car1 = new Car("Toyota", "Camry", 2021);
const car2 = car1.clone(); // Clone the first car

car2.make = "Honda";
car2.model = "Accord";
// car2.year = 2022;

console.log(car1.info()); // "2021 Toyota Camry"
console.log(car2.info()); // "2022 Honda Accord"
