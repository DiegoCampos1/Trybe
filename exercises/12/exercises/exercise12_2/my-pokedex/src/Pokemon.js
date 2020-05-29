import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div clasName="Pokemon">
        <h3>{name}</h3>
        <h4>{type}</h4>
        <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name}/>
      </div>
    );
  }
}

export default Pokemon;