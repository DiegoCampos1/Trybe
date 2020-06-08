import React from 'react';

const Showbutton = (props) => {
  const { changeTitle, value } = props;
  return (
    <button type="button" onClick={() => changeTitle(value)}>
      SHOW
    </button>
  );
};

export default Showbutton;
