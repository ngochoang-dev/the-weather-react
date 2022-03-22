import React from 'react';
import clsx from 'clsx';
import { IconContext } from 'react-icons';
import { WiCloudy } from 'react-icons/wi';
import styles from './MainComponent.module.css';
import LineChart from './LineChart';

function MainComponent() {
    return (
        <div className={clsx(
            styles.container
        )}>
            <LineChart />
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
