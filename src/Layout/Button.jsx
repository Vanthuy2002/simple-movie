import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ cliked, children, classCSS }) => {
  return (
    <button
      onClick={cliked}
      className={`w-full text-center px-5 py-2.5 bg-purple-500 rounded-lg ${classCSS}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  cliked: PropTypes.func,
  children: PropTypes.node,
  classCSS: PropTypes.string,
  margin: PropTypes.string,
};

export default Button;
