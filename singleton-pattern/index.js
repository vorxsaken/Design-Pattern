import { Logger } from "./logger.js";

const logger1 = new Logger();
logger1.log("Logger initialized.");

const logger2 = new Logger();
logger2.log("Another log message.");

// Verify if both instances are the same
console.log(logger1 === logger2); // true

console.log(logger1.getLogs());
// [
//   "[2024-10-27T12:00:00.000Z] Logger initialized.",
//   "[2024-10-27T12:05:00.000Z] Another log message."
// ]
