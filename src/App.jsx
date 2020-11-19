import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import './App.scss';
import Logo from './assets/img/weather_api.svg';
import CityLibrary from './components/CityLibrary';

const App = () => {

  const [ london, setLondon ] = useState([]);
  const [ bristol, setBristol ] = useState([]);
  const [ rome, setRome] = useState([]);

  const fetchLondonData = () => {

    const LondonUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=e1f6892354e30060c40cde91dbcde5f1';
    // Fetch call to API to access weather forecast for London, UK.
    fetch(LondonUrl)
      .then((Response) => Response.json())
      .then((Response) => {
        console.log(Response);
        setLondon(Response);
      })
      .catch(() => console.log("Unable to retrieve API data"));
  }

  const fetchBristolData = () => {

    const BristolUrl = 'https://api.openweathermap.org/data/2.5/weather?id=4749005&appid=e1f6892354e30060c40cde91dbcde5f1';
    // Fetch call to API to access weather forecast for Bristol, UK.
    fetch(BristolUrl)
      .then((Response) => Response.json())
      .then((Response) => {
        console.log(Response);
        setBristol(Response);
      })
      .catch(() => console.log("Unable to retrieve API data"));
  }

  const fetchRomeData = () => {

    const RomeUrl = 'https://api.openweathermap.org/data/2.5/weather?id=4219762&appid=e1f6892354e30060c40cde91dbcde5f1';
    // Fetch call to API to access weather forecast for Rome, Italy.
    fetch(RomeUrl)
      .then((Response) => Response.json())
      .then((Response) => {
        console.log(Response);
        setRome(Response);
      })
      .catch(() => console.log("Unable to retrieve API data"));
  }

  useEffect(() => {
    fetchLondonData();
    fetchBristolData();
    fetchRomeData();
  }, []);

  return (
    <>
      <header className="navbar">
        <nav className="navbar__container">
          <p className="navbar__logo">Tech Test</p>
          <ul>
            <Link to="/">
            <li>Weather</li>
            </Link>
            <Link to="quiz-challenge">
            <li>Quiz</li>
            </Link>
            <Link to="football-challenge">
            <li>Football</li>
            </Link>
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
          <button className="primaryBtn">View Forecast</button>
        </div>
      </main>
      <section class="forecast__container">
        <CityLibrary london={london} bristol={bristol} rome={rome} />
      </section>
    </>
  )
}

export default App;
