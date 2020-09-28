import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './drop.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'display-on',
      title: this.props.content[0].item,
    };
  }

  modifyTitle(item) {
    return this.setState((state) => {
      return { title: item };
    });
  }

  list = () => {
    const { content } = this.props;
    return content.map(({ id, item }) => (
      <div key={id} onClick={() => this.modifyTitle(item)}>
        {item}
      </div>
    ));
  };

  displayOnOff = () => {
    return this.setState((state) => {
      if (state.display === 'display-on') {
        return { display: 'display-off' };
      } else {
        return { display: 'display-on' };
      }
    });
  };

  render() {
    const {children} = this.props
    return (
      <div>
        <h3>{children}</h3>
        <div className="box" onClick={() => this.displayOnOff()}>
          {this.state.title}
        </div>
        <div className={this.state.display}>{this.list()}</div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  children: 'Lista de coisas que eu gosto de fazer...',
};

Dropdown.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number, item: PropTypes.string}),
  ),
  children: PropTypes.string,
};


export default Dropdown;
