import React from 'react';
import "./style.css"

class Buttons extends React.Component {
  render() {
    const { onClick, name, disabled } = this.props;
    return (
      <div>
        <button onClick={onClick} disabled={disabled}>
          {name}
        </button>
      </div>
    );
  }
}

export default Buttons;
