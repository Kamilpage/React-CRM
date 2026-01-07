import React from 'react';
import logo from '../../../assets/icons/others/logo.svg'
import caret from '../../../assets/icons/others/caretDoubleVertical.svg'
import styles from './sidebar.module.css'
import { sidebarSections } from './sidebar.config'
import {NavLink} from "react-router-dom";

// ЭТО САЙДБАР КОТОРЫЙ СЛЕВА

const Sidebar = () => {


    return (
        <div className={styles.sidebar}>
            <div>

                <div className={styles.sidebar__logo}>
                    <a href="#">
                    <img src={logo} alt="logo"/>
                    </a>
                </div>

                <hr className={styles.sidebar__hr}/>

                {sidebarSections.map((section, index) => (
                    <React.Fragment key={section.id}>

                        {section.title && (
                            <div className={styles.sidebar__heading}>
                                <h2>{section.title}</h2>
                            </div>
                        )}

                        {section.items.map(item => {
                            const Icon = item.icon

                            return (
                                <div key={item.path} className={styles.options__block}>
                                    <NavLink
                                        to={item.path}
                                        className={({isActive}) =>
                                            `${styles.sidebar__option} ${isActive ? styles.active : ''}`
                                        }
                                    >
                                        {({isActive}) => (
                                            <>
                                                <Icon isActive={isActive}/>
                                                <h2>{item.label}</h2>
                                            </>
                                        )}
                                    </NavLink>
                                </div>
                            )
                        })}

                        {index < sidebarSections.length - 1 && (
                            <hr className={styles.sidebar__hr}/>
                        )}

                    </React.Fragment>
                ))}

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
    );
};

export default Sidebar;
