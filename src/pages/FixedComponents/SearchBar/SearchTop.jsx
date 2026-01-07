import React from 'react';
import styles from './searchTop.module.css'
import hotKeys from '../../../assets/icons/others/hotKeysSearch.png'
import questionMark from '../../../assets/icons/others/question.svg'
import UserSelect from "../../Reusable/CustomSelect/UserSelect.jsx";
import { useEffect, useRef } from "react";
import {useUser} from "./UserContext.jsx";

// ЗДЕСЬ ПОИСК, HELP CENTER, ACCOUNT СВЕРХУ ЭКРАНА


const SearchTop = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            const isMac = navigator.platform.includes('Mac');
            const isFind =
                (isMac && e.metaKey && e.key === 'f') ||
                (!isMac && e.ctrlKey && e.key === 'f');

            if (isFind) {
                e.preventDefault();
                inputRef.current?.focus();
                inputRef.current?.select();
                console.log('keydown', e.key);

            }
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const { user, setUser, users } = useUser();


    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.topbar__inner}>
                    <div className={styles.topbar__left}>
                        <input   ref={inputRef}  type="text" placeholder='Search'/>
                        <img title='Подсказка для поиска Cmd+F или Ctr+F для Windows' src={hotKeys} alt="Подсказка для поиска ctr+F"/>
                    </div>


                    <div className={styles.topbar__right}>
                        <div className={styles.topbar__right__el} title='Addtional information'>
                            <img src={questionMark} alt="questionMark"/>
                            <h2>Help Center</h2>
                        </div>
                            <div className={styles.topbar__right__el}>
                                <UserSelect
                                    value={user}
                                    onChange={setUser}
                                    options={users}
                                />
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchTop;