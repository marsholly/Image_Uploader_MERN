import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveImages(images) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_IMAGES',
      payload: { images },
    })
  },
  receiveOneImage(image) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_IMAGE',
      payload: { image }
    })
  },
}

export default ServerActions;
