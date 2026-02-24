import React from 'react';
import styles from './searchTop.module.css'
import hotKeys from '../../../assets/icons/ui/hotKeysSearch.png'
import questionMark from '../../../assets/icons/ui/question.svg'
import CustomSelect from "../../../shared/ui/CustomSelect/CustomSelect.jsx";
import { useEffect, useRef } from "react";
import {useUser} from "../../context/UserContext.jsx";
import {useSearch} from "../../context/SearchContext.jsx";




const SearchTop = () => {
    const inputRef = useRef(null);
    const { query, setQuery } = useSearch();

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
                        <input   ref={inputRef}  type="text" placeholder='Search' value={query}
                                 onChange={(e) => setQuery(e.target.value)}/>
                        <img title='Подсказка для поиска Cmd+F или Ctr+F для Windows' src={hotKeys} alt="Подсказка для поиска ctr+F"/>
                    </div>


                    <div className={styles.topbar__right}>
                        <div className={styles.topbar__right__el} title='Addtional information'>
                            <img src={questionMark} alt="questionMark"/>
                            <h2>Help Center</h2>
                        </div>
                            <div className={styles.topbar__right__el}>
                                <CustomSelect
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