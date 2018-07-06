import Server from './server';

class App {
  constructor() {
    this.server = new Server();
  }

  start() {
    this.server.start();
  }
}

export default App;
