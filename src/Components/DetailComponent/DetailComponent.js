import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { IconContext } from "react-icons";
import { WiCloudy } from 'react-icons/wi';
import styles from './DetailComponent.module.css';
import Select from './Select';

function DetailComponent() {
    return (
        <div className={clsx(
            styles.container
        )}>
            <Select />
            <div className={clsx(
                styles.wrapper_date
            )}>
                <span>{dayjs().format('h:m A, ddd, MMM D, YYYY')}</span>
            </div>
            <div className={clsx(
                styles.wrapper_detail
            )}>
                <div className={clsx(
                    styles.temperature
                )}>
                    <IconContext.Provider value={{
                        className: clsx(
                            styles.icon
                        )
                    }}>
                        <WiCloudy />
                    </IconContext.Provider>
                    <p>
                        72
                        <span>&deg;F</span>
                    </p>
                </div>
                <div className={clsx(
                    styles.status
                )}>
                    <p>Cloudy</p>
                </div>
                <div className={clsx(
                    styles.sub_status
                )}>
                    <div className={clsx(
                        styles.box_sub_status
                    )}>
                        <span>Humidity</span>
                        <p>45%</p>
                    </div>
                    <div className={clsx(
                        styles.box_sub_status
                    )}>
                        <span>Wind speed</span>
                        <p>19.2 km/j</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailComponent