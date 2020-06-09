import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent } = props;
  const { title, content, timeSeconds} = props.information
  setTimeout(() => hideComponent(), timeSeconds*1000);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}


Alert.defaultProps = {
  information: { title: 'Jogos preferidos', content: "Jogo pra caramba!!!", timeSeconds: 3 },
};

Alert.propTypes = {
 
  information: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    timeSeconds: PropTypes.number
  })
}



export default Alert;
