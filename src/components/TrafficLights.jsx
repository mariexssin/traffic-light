import React from 'react';
import Light from './Light';
import './TrafficLights.css';

function TrafficLights({ orientation = 'vertical' }) {
  return (
    <div className={`traffic-lights traffic-lights--${orientation}`}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
}

export default TrafficLights;