import React from 'react';
import styles from './CityLibrary.module.scss';
import CityCard from '../CityCard';

const CityLibrary = (props) => {

    const { bristol, london, rome } = props;

    // const renderCityForecasts = () => (
    //     <CityCard />
    // )

    return (
        <div>
            <CityCard bristol={bristol} london={london} rome={rome} />    
        </div>
    )
}

export default CityLibrary;
