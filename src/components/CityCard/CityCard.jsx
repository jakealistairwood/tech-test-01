import React from 'react';
import styles from './CityCard.module.scss';

const CityCard = (props) => {

    const { bristol, rome, london } = props;

    console.log(bristol.main.temp);

    // Kelvin to Celsius formula is:
    // K - 273.15 = _'C

    const tempInBristol = Math.round(bristol.main.temp - 273.15);
    const tempInLondon = Math.round(london.main.temp - 273.15);
    const tempInRome = Math.round(rome.main.temp - 273.15);

    return (
        <>
        <div className={styles.londonCard}>
            <header className={styles.cityHeader}>
                <h3>London</h3>
                <p>{tempInLondon}&deg;C</p>
            </header>    
        </div>
        <div className={styles.bristolCard}>
            <header className={styles.cityHeader}>
                <h3>Bristol</h3>
                <p>{tempInBristol}&deg;C</p>
            </header>    
        </div>
        <div className={styles.romeCard}>
            <header className={styles.cityHeader}>
                <h3>Rome</h3>
                <p>{tempInRome}&deg;C</p>
            </header>    
        </div>
        </>
    )
}

export default CityCard;
