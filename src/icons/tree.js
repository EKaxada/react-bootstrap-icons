import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tree = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M8 0a.5.5 0 0 1 .416.223l3 4.5A.5.5 0 0 1 11 5.5h-.098l2.022 3.235a.5.5 0 0 1-.424.765h-.191l1.638 3.276a.5.5 0 0 1-.447.724h-11a.5.5 0 0 1-.447-.724L3.69 9.5H3.5a.5.5 0 0 1-.424-.765L5.098 5.5H5a.5.5 0 0 1-.416-.777l3-4.5A.5.5 0 0 1 8 0zM5.934 4.5H6a.5.5 0 0 1 .424.765L4.402 8.5H4.5a.5.5 0 0 1 .447.724L3.31 12.5h9.382l-1.638-3.276A.5.5 0 0 1 11.5 8.5h.098L9.576 5.265A.5.5 0 0 1 10 4.5h.066L8 1.401 5.934 4.5z"
      />
      <path d="M7 13h2v3H7v-3z" />
    </svg>
  );
});

Tree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tree.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Tree;