import React, { Component } from 'react';
import ImageStore from '../stores/ImageStore';
import ImageList from './ImageList';
import ImageAction from '../actions/ImageAction';


export default class AllImage extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: ImageStore.getAll(),
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ImageAction.getAllImages();
    ImageStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ImageStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      images: ImageStore.getAll()
    });
  }

  render() {
    let {images} = this.state;
    let listImages;
    if(images) {
      listImages = images.map(image => {
        return (
          <ImageList key={image._id} {...image} />
        )
      })
    } else {
      listImages = <div></div>;
    }

    return (
      <div className="container">
        <div className="row">
          {listImages}
        </div>
      </div>
    )
  }
};
