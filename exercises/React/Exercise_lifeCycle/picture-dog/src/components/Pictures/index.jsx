import React, { Component } from 'react';
import PictureElement from '../PictureElement'

class Pictures extends Component {


  render() {
    return (
      <div>
        <h3>Foto atual:</h3>
        <PictureElement />
        <p>Uma bela foto de catioro você não acha??</p>
        
      </div>
    );
  }
}

export default Pictures;