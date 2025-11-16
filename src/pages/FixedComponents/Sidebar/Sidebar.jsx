import React from 'react';
import logo from '../../../assets/logo.svg'
import caret from '../../../assets/caretDoubleVertical.svg'
import styles from './sidebar.module.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [sidebarEl, setSidebarEl] = React.useState([{
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 10V2.5" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.4953 6.25L3.50488 13.75" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>, name: 'Dashboard'
    },
        {
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.39095 8.12495C4.38991 7.38371 4.5356 6.64959 4.81961 5.96491C5.10361 5.28024 5.52033 4.65854 6.04573 4.13567C6.57113 3.61279 7.19482 3.19907 7.88085 2.91837C8.56689 2.63766 9.3017 2.49551 10.0429 2.50011C13.1359 2.5231 15.6098 5.09396 15.6098 8.19557V8.74995C15.6098 11.548 16.1953 13.1717 16.7109 14.0592C16.7664 14.154 16.796 14.2618 16.7965 14.3717C16.7971 14.4816 16.7687 14.5897 16.7142 14.6851C16.6597 14.7805 16.581 14.8599 16.486 14.9151C16.391 14.9704 16.2831 14.9997 16.1732 15H3.82693C3.71703 14.9997 3.60914 14.9704 3.51415 14.9151C3.41917 14.8598 3.34045 14.7805 3.28592 14.685C3.2314 14.5896 3.20302 14.4815 3.20362 14.3716C3.20423 14.2617 3.23381 14.1539 3.28938 14.059C3.80526 13.1716 4.39095 11.5479 4.39095 8.74995L4.39095 8.12495Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M7.5 15V15.625C7.5 16.288 7.76339 16.9239 8.23223 17.3928C8.70107 17.8616 9.33696 18.125 10 18.125C10.663 18.125 11.2989 17.8616 11.7678 17.3928C12.2366 16.9239 12.5 16.288 12.5 15.625V15"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>, name: 'Notifications', path: '/notifications'
        },
        {
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.2411 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H16.25C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V12.2411C16.875 12.3232 16.8588 12.4045 16.8274 12.4803C16.796 12.5561 16.75 12.625 16.6919 12.6831L12.6831 16.6919C12.625 16.75 12.5561 16.796 12.4803 16.8274C12.4045 16.8588 12.3232 16.875 12.2411 16.875V16.875Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.8188 12.4993H12.5V16.818" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>, name: 'Notes', path: '/notes'
        },
        {
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 11.875H12.5" stroke="rgba(114, 114, 114, 1)" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M7.5 9.375H12.5" stroke="rgba(114, 114, 114, 1)" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M12.5002 3.125H15.625C15.7908 3.125 15.9497 3.19085 16.0669 3.30806C16.1842 3.42527 16.25 3.58424 16.25 3.75V16.875C16.25 17.0408 16.1842 17.1997 16.0669 17.3169C15.9497 17.4342 15.7908 17.5 15.625 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.75C3.75 3.58424 3.81585 3.42527 3.93306 3.30806C4.05027 3.19085 4.20924 3.125 4.375 3.125H7.49983"
                    stroke="rgba(114, 114, 114, 1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M6.875 5.625V5C6.875 4.1712 7.20424 3.37634 7.79029 2.79029C8.37634 2.20424 9.1712 1.875 10 1.875C10.8288 1.875 11.6237 2.20424 12.2097 2.79029C12.7958 3.37634 13.125 4.1712 13.125 5V5.625H6.875Z"
                    stroke="rgba(114, 114, 114, 1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>, name: 'Tasks', path: '/tasks'
        },
        {
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 4.375L10 11.25L2.5 4.375" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M2.5 4.375H17.5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H3.125C2.95924 15.625 2.80027 15.5592 2.68306 15.4419C2.56585 15.3247 2.5 15.1658 2.5 15V4.375Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.63651 10L2.69287 15.4484" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M17.3075 15.4484L11.3638 10" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>, name: 'Emails', path: '/emails'
        },
        {
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.75 1.875V4.375" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M6.25 1.875V4.375" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M3.125 6.875H16.875" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M7.1875 9.99976H9.375L8.125 11.5623C8.33053 11.5623 8.53289 11.6129 8.71416 11.7098C8.89543 11.8067 9.05002 11.9468 9.16423 12.1176C9.27845 12.2885 9.34876 12.4849 9.36895 12.6895C9.38915 12.894 9.35859 13.1003 9.28 13.2903C9.2014 13.4802 9.07719 13.6478 8.91836 13.7782C8.75953 13.9087 8.57099 13.9979 8.36942 14.0381C8.16786 14.0783 7.9595 14.0682 7.76278 14.0086C7.56607 13.9491 7.38708 13.8419 7.24166 13.6967"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 10.9373L12.5 9.99976V14.0623" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
            , name: 'Calendars', path: '/calendars'
        },
    ]);
    const [databaseEl, setDatabaseEl] = React.useState([{
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 16.25H2.5V3.75" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M16.25 5L10 11.25L7.5 8.75L2.5 13.75" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M16.25 8.125V5H13.125" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
        , name: 'Analytics', path: '/analytics'
    },
        {
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.625 11.25C12.0057 11.25 13.125 10.1307 13.125 8.75C13.125 7.36929 12.0057 6.25 10.625 6.25C9.24429 6.25 8.125 7.36929 8.125 8.75C8.125 10.1307 9.24429 11.25 10.625 11.25Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 8.4375H4.375" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M2.5 5.3125H4.375" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M2.5 11.5625H4.375" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M2.5 14.6875H4.375" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M6.875 13.1248C7.31169 12.5427 7.8779 12.0703 8.5288 11.7448C9.17969 11.4194 9.89741 11.25 10.6251 11.25C11.3528 11.25 12.0705 11.4194 12.7215 11.7447C13.3724 12.0701 13.9386 12.5426 14.3753 13.1247"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M16.875 16.875V3.125C16.875 2.77982 16.5952 2.5 16.25 2.5L5 2.5C4.65482 2.5 4.375 2.77982 4.375 3.125V16.875C4.375 17.2202 4.65482 17.5 5 17.5H16.25C16.5952 17.5 16.875 17.2202 16.875 16.875Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>, name: 'Contacts', path: '/contacts'
        },
        {
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.8755 5.625H3.12549C2.78031 5.625 2.50049 5.90482 2.50049 6.25V16.25C2.50049 16.5952 2.78031 16.875 3.12549 16.875H16.8755C17.2207 16.875 17.5005 16.5952 17.5005 16.25V6.25C17.5005 5.90482 17.2207 5.625 16.8755 5.625Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M13.125 5.625V4.375C13.125 4.04348 12.9933 3.72554 12.7589 3.49112C12.5245 3.2567 12.2065 3.125 11.875 3.125H8.125C7.79348 3.125 7.47554 3.2567 7.24112 3.49112C7.0067 3.72554 6.875 4.04348 6.875 4.375V5.625"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M17.5006 9.86792C15.2211 11.1867 12.6334 11.8792 9.99998 11.875C7.36696 11.8792 4.77968 11.1869 2.50049 9.86858"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.0625 9.375H10.9375" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>, name: 'Companies', path: '/companies'
        },]);

    const [settings, setSettings] = React.useState([{
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '
            <path d="M8.75 3.75H3.75V8.75H8.75V3.75Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            \n' +
            '
            <path d="M16.25 3.75H11.25V8.75H16.25V3.75Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            \n' +
            '
            <path d="M8.75 11.25H3.75V16.25H8.75V11.25Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            \n' +
            '
            <path d="M16.25 11.25H11.25V16.25H16.25V11.25Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            \n' +
            '</svg>, name: 'Integrations', path: '/integrations'
    },
        {
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '
                <path
                    d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                \n' +
                '
                <path
                    d="M14.3484 5.08493C14.5486 5.26215 14.7378 5.45135 14.915 5.6515L17.0496 5.95631C17.3957 6.55908 17.6626 7.20402 17.8436 7.87513L16.5503 9.59949C16.5503 9.59949 16.5666 10.1338 16.5503 10.4006L17.8442 12.1255C17.6627 12.7965 17.3954 13.4413 17.0488 14.0438L14.915 14.3486C14.915 14.3486 14.5487 14.7379 14.3486 14.9151L14.0437 17.0497C13.441 17.3958 12.796 17.6627 12.1249 17.8437L10.4007 16.5505C10.1338 16.5667 9.86626 16.5667 9.59942 16.5505L7.87453 17.8443C7.20354 17.6628 6.55878 17.3955 5.95625 17.049L5.6515 14.9152C5.45135 14.738 5.26214 14.5488 5.08492 14.3487L2.95036 14.0439C2.60421 13.4411 2.33732 12.7962 2.15632 12.1251L3.44964 10.4007C3.44964 10.4007 3.43337 9.86636 3.44959 9.59954L2.15576 7.87465C2.33722 7.20366 2.60454 6.5589 2.9511 5.95637L5.08481 5.65162C5.26202 5.45147 5.45123 5.26226 5.65138 5.08504L5.95619 2.95048C6.55896 2.60433 7.20389 2.33745 7.87501 2.15645L9.59926 3.44972C9.8661 3.4335 10.1337 3.43349 10.4005 3.44971L12.1254 2.15588C12.7964 2.33734 13.4412 2.60466 14.0437 2.95122L14.3484 5.08493Z"
                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                \n' +
                '</svg>, name: 'Settings', path: '/settings/'
        },])

    return (<>
            <div className={styles.sidebar}>
                <div>

                    <div className={`${styles.d_flex} ${styles.sidebar__logo}`}>
                        <img src={logo} alt="logo"/>
                        <h1>Venture</h1>
                    </div>
                    <hr className={styles.sidebar__hr}/>
                    <div>
                        {sidebarEl.map((item, index) => (
                            <div key={index} className={styles.options__block}>
                                <Link to={item.path} className={`${styles.d_flex} ${styles.sidebar__option}`}>
                                    {item.icon}
                                    <h2>{item.name}</h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <hr className={styles.sidebar__hr}/>
                    <div className={styles.sidebar__heading}>
                        <h2>DATABASE</h2>
                    </div>
                    <div>
                        {databaseEl.map((item, index) => (
                            <div key={index} className={styles.options__block}>
                                <Link to={item.path} className={`${styles.d_flex} ${styles.sidebar__option}`}>
                                    {item.icon}
                                    <h2>{item.name}</h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <hr className={styles.sidebar__hr}/>
                    <div>
                        {settings.map((item, index) => (
                            <div key={index} className={styles.options__block}>
                                <Link to={item.path} className={`${styles.d_flex} ${styles.sidebar__option}`}>
                                    {item.icon}
                                    <h2>{item.name}</h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.sidebar__foot}>
                    <hr/>
                    <div className={styles.sidebar__foot__inner}>
                        <p>M</p>
                        <h2>Marketing Team’s</h2>
                        <img src={caret} alt="caret"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
