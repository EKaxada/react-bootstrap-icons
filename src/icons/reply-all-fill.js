import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ReplyAllFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M8.079 11.9l4.568-3.281a.719.719 0 0 0 0-1.238L8.079 4.1A.716.716 0 0 0 7 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z" />
      <path d="M10.868 4.293a.5.5 0 0 0 .106.7l4.012 2.953a.51.51 0 0 0 .042.028.147.147 0 0 1 0 .252.512.512 0 0 0-.042.028l-4.012 2.954a.5.5 0 1 0 .593.805l3.994-2.94a1.147 1.147 0 0 0 0-1.946l-3.994-2.94a.5.5 0 0 0-.699.106z" />
    </svg>
  );
});

ReplyAllFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ReplyAllFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ReplyAllFill;
