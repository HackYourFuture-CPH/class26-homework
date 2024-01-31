// Border.js
import React from 'react';
import PropTypes from 'prop-types';

function Border({ children }) {
  return <div style={{ border: '3px solid black' }}>{children}</div>;
}

Border.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Border;
