import React, { Component } from 'react';
import UploaderForm from './UploaderForm';
import AllImage from './AllImage';
import ImageAction from '../actions/ImageAction';

export default class App extends Component {
  constructor(){
    super();
    this.submitFile = this.submitFile.bind(this);
  }

  submitFile(file){
    ImageAction.createImage(file);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Image Uploader</h1>
        <div className="row">
          <div className="col-md-3">
            <UploaderForm submitFile={this.submitFile} />
          </div>
          <div className="col-md-9">
            <AllImage />
          </div>
        </div>
      </div>
    )
  }
};
