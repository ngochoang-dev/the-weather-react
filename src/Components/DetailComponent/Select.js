import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './DetailComponent.module.css';
import useClickOutSide from '../../customHook/useClickOutSide';

const selectArr = [
    {
        id: 1,
        name: 'Việt Nam'
    },
    {
        id: 2,
        name: 'Trung Quốc'
    }, {
        id: 3,
        name: 'Ấn Độ'
    },
    {
        id: 4,
        name: 'Thái Lan'
    }
]

function Select() {
    const selectRef = useRef();

    const [showSelect, setShowSelect] = useState(false);

    const handleSelect = (e) => {
        console.log(e.target.textContent);
    }

    useClickOutSide(e => {
        if (selectRef.current) {
            if (!selectRef.current.contains(e.target)) {
                setShowSelect(false)
            }
        }
    })


    return (
        <div className={clsx(
            styles.wrapper_select
        )}>
            <label className={clsx(
                styles.select_label
            )}>
                Your city
            </label>
            <div className={clsx(
                styles.select
            )}
                ref={selectRef}
            >
                <div className={clsx(
                    styles.current_city
                )}
                    onClick={() => setShowSelect(!showSelect)}
                >
                    <span>London</span>
                </div>
                {
                    showSelect && (
                        <ul className={clsx(
                            styles.list_city
                        )}>
                            {
                                selectArr.map(item => {
                                    return (
                                        <li
                                            key={item.id}
                                            onClick={(e) => {
                                                setShowSelect(false)
                                                handleSelect(e)
                                            }}>
                                            {item.name}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    )
                }

            </div>
        </div>
    )
}

export default Select