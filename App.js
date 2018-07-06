import Logger from './lib/Logger';
import Server from './server';
class App {
  start() {
    new Logger().log('App Started!');
    new Server().start();
  }
}

export default App;
