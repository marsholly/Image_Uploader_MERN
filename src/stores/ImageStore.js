import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';



class ImageStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch () {
        case :

          break;

      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }


}

export default new ImageStore();
