import React from 'react';
import styles from './CityCard.module.scss';

const CityCard = (props) => {

    const { bristol, rome, london } = props;

    // To convert Kelvin to Celsius the formula is:
    // K - 273.15 = _'C
    const kelvinToCelsius = () => {

    }

    return (
        <div className={styles.londonCard}>
            <header className={styles.cityHeader}>
                <h3>London</h3>
                <p></p>
            </header>    
        </div>
    )
}

export default CityCard;
