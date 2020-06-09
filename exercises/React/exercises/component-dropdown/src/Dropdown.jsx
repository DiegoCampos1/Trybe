import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Dropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.content[0].item,
    }
  }

  modifyTitle = () => {
    const { content } = this.props
    return console.log(content)
  }

  list = () => {
    const { content } = this.props
    return (
      content.map(({id, item}) => (<div key={id}>{item}</div>))
    )
  }
  render() {
    

    return (
      
      <div>
        <h3></h3>
        <div className="box" onClick={(e) => this.modifyTitle(e)}>{this.state.title}</div>
        <div>{this.list()}</div>
      </div>
    );
  }
}



export default Dropdown;