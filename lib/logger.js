class Logger {
  constructor(context = 'App') {
    this.context = context;
  }

  log(message) {
    console.log(`${this.context} - ${message}`);
  }
}

export {Logger};
export default Logger;
