import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SuitSpadeFill = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M5.602 14.153C6.272 13.136 7.348 11.28 8 9c.652 2.28 1.727 4.136 2.398 5.153.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847z" />
      <path d="M4.5 12.5A3.5 3.5 0 0 0 8 9a3.5 3.5 0 1 0 7 0c0-3-4-4-7-9-3 5-7 6-7 9a3.5 3.5 0 0 0 3.5 3.5z" />
    </svg>
  );
});

SuitSpadeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SuitSpadeFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SuitSpadeFill;