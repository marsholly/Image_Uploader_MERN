import React, { Component } from 'react';
import moment from 'moment';

export default class ImageList extends Component {
  render() {
    let { _id, name, url, createAt }  = this.props;
    return(
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail imagesize">
            <img src={url} className="imgsize"/>
            <div className="caption">
              <h3>{name}</h3>
              <p>create at: {moment({createAt}).format('lll')}</p>
            </div>
          </div>
        </div>
    )
  }
}
