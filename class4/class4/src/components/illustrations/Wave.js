import React from 'react';
import PropTypes from 'prop-types';

Wave.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default function Wave({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={`${className}`}
    >
      <path
        fill={`${color ?? '#0099ff'}`}
        fillOpacity="1"
        d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,288C672,299,768,277,864,234.7C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}
