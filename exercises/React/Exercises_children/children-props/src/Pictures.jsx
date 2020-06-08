import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Pictures.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number
};

Pictures.defaultProps = {
  height: 400,
};


export default Pictures;
