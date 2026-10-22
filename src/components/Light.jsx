import React from 'react';
import './Light.css';

function Light({ color }) {
  return (
    <div className={`light light--${color}`}>
      <span className="light__label">{color}</span>
    </div>
  );
}

export default Light;