import React from 'react';

const BorderWrapper = ({ children }) => {
  const borderStyle = {
    border: '2px solid black',
    padding: '5px',
    margin: '5px',
  };

  return (
    <div style={borderStyle}>
      {children}
    </div>
  );
};

export default BorderWrapper;
