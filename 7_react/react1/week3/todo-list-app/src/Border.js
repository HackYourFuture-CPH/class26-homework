import React from 'react';

const Border = ({ children }) => {
  return (
    <div style={{ 
    border: '2px solid black',
    padding: '8px',
    marginBottom: '8px',
    marginTop: `8px`, marginLeft: `auto`,marginRight: `auto`,
    width: 300,
    textAlign: 'center' }}>

      {children}
    </div>
  );
};

export default Border;
