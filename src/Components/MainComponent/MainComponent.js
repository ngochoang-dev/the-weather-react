import React, { useEffect, useMemo } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs'
import { IconContext } from 'react-icons';
import { WiCloudy } from 'react-icons/wi';
import { useSelector, useDispatch } from 'react-redux';
import styles from './MainComponent.module.css';
import LineChart from './LineChart';
import { getAllForecast } from '../../redux/actions';

function MainComponent() {
    const dispatch = useDispatch()
    const allForecast = useSelector(state => state.getAllForecast);

    const humidityArr = useMemo(() => {
        return allForecast.map(item => {
            return item.humidity
        })
    }, [allForecast]);

    const dateArr = useMemo(() => {
        return allForecast.map(item => {
            return item.date
        })
    }, [allForecast]);

    console.log(dateArr);


    useEffect(() => {
        dispatch(getAllForecast())
    }, [dispatch]);


    return (
        <div className={clsx(
            styles.container
        )}>
            <h4 className={styles.header}>Temperature</h4>
            <LineChart
                humidityArr={humidityArr}
            />
            <div className={clsx(
                styles.wrapper_forecast
            )}>
                <div className={clsx(
                    styles.box_forecast,
                    styles.current,
                )}>
                    <h4>Today</h4>
                    <IconContext.Provider value={{ className: clsx(styles.icon) }}>
                        <WiCloudy />
                    </IconContext.Provider>
                    <div className={clsx(styles.humidity)}>
                        <p>Humidity</p>
                        <span>30%</span>
                    </div>
                </div>
                <div className={clsx(
                    styles.box_forecast
                )}>
                    <h4>Today</h4>
                    <IconContext.Provider value={{ className: clsx(styles.icon) }}>
                        <WiCloudy />
                    </IconContext.Provider>
                    <div className={clsx(styles.humidity)}>
                        <p>Humidity</p>
                        <span>30%</span>
                    </div>
                </div>
                <div className={clsx(
                    styles.box_forecast
                )}>
                    <h4>Today</h4>
                    <IconContext.Provider value={{ className: clsx(styles.icon) }}>
                        <WiCloudy />
                    </IconContext.Provider>
                    <div className={clsx(styles.humidity)}>
                        <p>Humidity</p>
                        <span>30%</span>
                    </div>
                </div>
                <div className={clsx(
                    styles.box_forecast
                )}>
                    <h4>Today</h4>
                    <IconContext.Provider value={{ className: clsx(styles.icon) }}>
                        <WiCloudy />
                    </IconContext.Provider>
                    <div className={clsx(styles.humidity)}>
                        <p>Humidity</p>
                        <span>30%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent;
