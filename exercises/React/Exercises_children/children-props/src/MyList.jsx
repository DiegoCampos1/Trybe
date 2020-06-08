import React from 'react';
const MyList = (props) => {
  return (
    <ul className='list'>
      {props.children.map((child) => {
        if (child.type && child.type === 'li' ) return child;
        return <li key={child}>{child}</li>;
      })}
    </ul>
  );
};
export default MyList;
