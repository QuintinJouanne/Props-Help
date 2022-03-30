import React from 'react';
import './Cube.css';

const Cube = ({ name, color, rounder, width, height }) => {
  return (
    <div
      className="item"
      style={{
        width: width,
        height: height,
        borderRadius: rounder ? '50%' : null,
        background: color,
      }}
    >
      {name}
    </div>
  );
};

export default Cube;
