import React from 'react';
import styles from './topbar.module.css'
import person from '../../../assets/person.png'
import arrowDown from '../../../assets/arrowDown.svg'

const Topbar = () => {
    const [users, setUsers] = React.useState([{
        icon: person, name: 'Brian F.'
    }])


    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.topbar__inner}>
                    <div className={styles.topbar__left}>
                        <input type="text" placeholder='Search'/>
                        <button title='Command'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 3H11.25C11.7141 3 12.1593 3.18437 12.4874 3.51256C12.8156 3.84075 13 4.28587 13 4.75V4.75C13 5.21413 12.8156 5.65925 12.4874 5.98744C12.1592 6.31563 11.7141 6.5 11.25 6.5H9.5V4.75C9.5 4.28587 9.68437 3.84075 10.0126 3.51256C10.3408 3.18437 10.7859 3 11.25 3V3Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.5 6.5H4.75C4.28587 6.5 3.84075 6.31563 3.51256 5.98744C3.18437 5.65925 3 5.21413 3 4.75V4.75C3 4.28587 3.18437 3.84075 3.51256 3.51256C3.84075 3.18437 4.28587 3 4.75 3H4.75C5.21413 3 5.65925 3.18437 5.98744 3.51256C6.31563 3.84075 6.5 4.28587 6.5 4.75V6.5Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.5 9.5H11.25C11.7141 9.5 12.1592 9.68437 12.4874 10.0126C12.8156 10.3408 13 10.7859 13 11.25V11.25C13 11.7141 12.8156 12.1593 12.4874 12.4874C12.1593 12.8156 11.7141 13 11.25 13H11.25C10.7859 13 10.3408 12.8156 10.0126 12.4874C9.68437 12.1592 9.5 11.7141 9.5 11.25V9.5Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.75 13H4.75C4.28587 13 3.84075 12.8156 3.51256 12.4874C3.18437 12.1593 3 11.7141 3 11.25V11.25C3 10.7859 3.18437 10.3408 3.51256 10.0126C3.84075 9.68437 4.28587 9.5 4.75 9.5H6.5V11.25C6.5 11.7141 6.31563 12.1592 5.98744 12.4874C5.65925 12.8156 5.21413 13 4.75 13V13Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.5 6.5H6.5V9.5H9.5V6.5Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button title='Function'>F</button>
                    </div>
                    <div className={styles.topbar__right}>
                        <div className={styles.topbar__right__el} title='Addtional information'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 13.875C10.1036 13.875 10.1875 13.9589 10.1875 14.0625C10.1875 14.1661 10.1036 14.25 10 14.25C9.89645 14.25 9.8125 14.1661 9.8125 14.0625C9.8125 13.9589 9.89645 13.875 10 13.875Z" fill="#727272" stroke="#727272" strokeWidth="1.5"/>
                                <path d="M10 11.2502V10.6252C10.4326 10.6252 10.8556 10.497 11.2153 10.2566C11.575 10.0162 11.8554 9.67458 12.021 9.27487C12.1866 8.87515 12.2299 8.43532 12.1455 8.01099C12.0611 7.58665 11.8527 7.19688 11.5468 6.89095C11.2409 6.58502 10.8511 6.37668 10.4268 6.29228C10.0024 6.20787 9.56259 6.25119 9.16288 6.41676C8.76317 6.58233 8.42153 6.8627 8.18116 7.22244C7.9408 7.58217 7.8125 8.0051 7.8125 8.43775" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h2>Help Center</h2>
                        </div>
                        {users.map((user, index) => (
                            <div className={styles.topbar__right__el} key={index}>
                                <img src={user.icon} alt="person"/>
                                <h3>{user.name}</h3>
                                <img src={arrowDown} alt="arrowDown"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;