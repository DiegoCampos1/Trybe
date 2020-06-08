import React, { Component } from 'react';

class Pictures extends Component {
  render() {
    const { height, src, alt, legenda } = this.props;
    return (
      <ul>
        
        <li><img src={src} alt={alt} height={height} /></li>
        <li><span>{legenda}</span></li>
        
      </ul>
    );
  }
}

export default Pictures;
