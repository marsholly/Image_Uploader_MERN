import API from '../API';

const ImageAction = {
  getAllImages: API.getAllImages,
  createImage(file) {
    API.createImage(file);
  },
}

export default ImageAction;
