import React from 'react';
import './App.scss';
import Logo from './assets/img/weather_api.svg';

const App = () => {
  return (
    <>
      <header className="navbar">
        <nav className="navbar__container">
          <p className="navbar__logo">Tech Test</p>
          <ul>
            <li>Weather</li>
            <li>Quiz</li>
            <li>Football</li>
          </ul>
        </nav>
      </header>
      <main className="hero">
        <div className="hero__img">
          <img src={Logo} alt="weather-app" />
        </div>
        <div className="hero__content">
          <h1>Forecast Predictor</h1>
          <p>The most accurate forecast predictor online! Quickly find the forecast of your hometown or any place in the world!</p>
          <button class="primaryBtn">View Forecast</button>
        </div>
      </main>
    </>
  )
}

export default App;
