import React from 'react';
import TrafficLights from './components/TrafficLights';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Лабораторна робота №1: Світлофор</h1>
      
      <div className="demo-section">
        <div className="demo-card">
          <h2>Вертикальний світлофор</h2>
          <TrafficLights orientation="vertical" />
        </div>

        <div className="demo-card">
          <h2>Горизонтальний світлофор</h2>
          <TrafficLights orientation="horizontal" />
        </div>
      </div>
    </div>
  );
}

export default App;