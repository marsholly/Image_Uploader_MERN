import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _images = null;

class ImageStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_IMAGES':
          _images = action.payload.images;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_IMAGE':
          var { image } = action.payload;
          _images.push(image);
          this.emit('CHANGE');
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

  getAll() {
    return _images;
  }

}

export default new ImageStore();
