class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance; // Return the existing instance if it exists
    }

    this.logs = []; // Array to store log messages
    Logger.instance = this; // Cache the instance
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${message}`);
    console.log(`[${timestamp}] ${message}`);
  }

  getLogs() {
    return this.logs;
  }
}

export { Logger };
