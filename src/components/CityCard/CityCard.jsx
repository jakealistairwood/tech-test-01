import React from 'react';
import styles from './CityCard.module.scss';
import RainSVG from '../../assets/img/undraw_Raining_re_4b55.svg';
import SunSVG from '../../assets/img/undraw_air_support_wy1q.svg';
import CloudSVG from '../../assets/img/undraw_Weather_app_re_kcb1.svg';

const CityCard = (props) => {

    const { bristol, rome, london } = props;

    // Kelvin to Celsius formula is:
    // K - 273.15 = _'C


    // Actual Temperature
    const tempInBristol =  Math.round(bristol.main.temp - 273.15);
    const tempInLondon = Math.round(london.main.temp - 273.15);
    const tempInRome = Math.round(rome.main.temp - 273.15);

    // Feels Like Temperature
    const feelsLikeInBristol = Math.round(bristol.main.feels_like - 273.15);
    const feelsLikeInLondon = Math.round(london.main.feels_like - 273.15);
    const feelsLikeInRome = Math.round(rome.main.feels_like - 273.15);

    // Minimum Temp
    const minTempInBristol = Math.round(bristol.main.temp_min - 273.15);
    const minTempInLondon = Math.round(london.main.temp_min - 273.15);
    const minTempInRome = Math.round(rome.main.temp_min - 273.15);

    // Maximum Temp 
    const maxTempInBristol = Math.round(bristol.main.temp_max - 273.15);
    const maxTempInLondon = Math.round(london.main.temp_max - 273.15);
    const maxTempInRome = Math.round(rome.main.temp_max - 273.15);

    return (
        <>
        <div className={styles.city}>
            <header className={styles.cityHeader}>
                <h3>London</h3>
                <p>{tempInLondon}&deg;C</p>
            </header>    
            <div className={styles.imgWrapper}>
                <img src={RainSVG} alt="person-holding-umbrella"></img>
            </div>
            <footer className={styles.cityForecast}>
                <div className={styles.cityForecast__info}>
                    <h4>Feels like: </h4>
                    <p>{feelsLikeInLondon}&deg;C</p>
                </div>
                <div className={styles.cityForecast__info}>
                    <h4>Min Temp: </h4>
                    <p>{minTempInLondon}&deg;C</p>
                </div>
                <div className={styles.cityForecast__info}>
                    <h4>Max Temp: </h4>
                    <p>{maxTempInLondon}&deg;C</p>
                </div>
            </footer> 
        </div>
        <div className={styles.city}>
            <header className={styles.cityHeader}>
                <h3>Bristol</h3>
                <p>{tempInBristol}&deg;C</p>
            </header>  
            <div className={styles.imgWrapper}>
                <img src={SunSVG} alt="air-balloon-under-sunshine"></img>
            </div>
            <footer className={styles.cityForecast}>
                <div className={styles.cityForecast__info}>
                    <h4>Feels like: </h4>
                    <p>{feelsLikeInBristol}&deg;C</p>
                </div>
                <div className={styles.cityForecast__info}>
                    <h4>Min Temp: </h4>
                    <p>{minTempInBristol}&deg;C</p>
                </div>
                <div className={styles.cityForecast__info}>
                    <h4>Max Temp: </h4>
                    <p>{maxTempInBristol}&deg;C</p>
                </div>
            </footer>   
        </div>
        <div className={styles.city}>
            <header className={styles.cityHeader}>
                <h3>Rome</h3>
                <p>{tempInRome}&deg;C</p>
            </header>
            <div className={styles.imgWrapper}>
                <img src={CloudSVG} alt="sunny-intervals"></img>
            </div>
            <footer className={styles.cityForecast}>
                <div className={styles.cityForecast__info}>
                    <h4>Feels like: </h4>
                    <p>{feelsLikeInRome}&deg;C</p>
                </div>
                <div className={styles.cityForecast__info}>
                    <h4>Min Temp: </h4>
                    <p>{minTempInRome}&deg;C</p>
                </div>
                <div className={styles.cityForecast__info}>
                    <h4>Max Temp: </h4>
                    <p>{maxTempInRome}&deg;C</p>
                </div>
            </footer>   
        </div>
        </>
    )
}

export default CityCard;
