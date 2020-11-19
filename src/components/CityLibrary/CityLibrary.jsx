import React from 'react';
import styles from './CityLibrary.module.scss';
import CityCard from '../CityCard';

const CityLibrary = (props) => {

    const { bristol, london, rome } = props;

    // const renderCityForecasts = () => (
    //     <CityCard />
    // )

    return (
        <section className={styles.city__container}>
            <CityCard bristol={bristol} london={london} rome={rome} />    
        </section>
    )
}

export default CityLibrary;
