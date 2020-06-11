// arquivo Users.js
import React from 'react';

class Users extends React.Component {
  render() {
    const { greetingMessage = 'Hi There' } = this.props
    const ID = this.props.match.params.ID;



    return (
      <div>
        {console.log(ID)}
        <h2> Users </h2>
        <p> {greetingMessage}, this is my awesome Users component </p>
      </div>
    );
  }
}

export default Users;
