
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './activityTopbar.module.css'
import TopbarLayout from "../../../../../app/layout/TopbarLayout/TopbarLayout.jsx";
import {selectTab, useAnalyticsSelector} from "../../contex/analytics.selectors.js";
import {useAnalytics} from "../../contex/AnalyticsContext.jsx";

const tabs = [
    { name: 'Sales', path: '/analytics/sales', value: 'sales' },
    { name: 'Activity', path: '/analytics/activity', value: 'activity' }
];

const AnalyticsTopbar = () => {
    const { dispatch } = useAnalytics();
    const activeTab = useAnalyticsSelector(selectTab);

    const handleClick = (tab) => {
        dispatch({ type: 'SET_TAB', payload: tab });
    };

    return (
        <TopbarLayout
            left={
                <>
                    <h1>Analytics</h1>

                    {tabs.map(({ name, path, value }) => (
                        <NavLink
                            key={value}
                            to={path}
                            onClick={() => handleClick(value)}
                            className={({ isActive }) =>
                                isActive ? styles.activeBtn : styles.btn
                            }
                        >
                            {({ isActive }) => (
                                <div className={styles.display__type}>
                                    <p className={isActive ? styles.activeText : ''}>
                                        {name}
                                    </p>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </>
            }

            right={
                <>
                    {/* Место под будущие фильтры Period (Month/Year/Range) */}
                </>
            }
        />
    );
};

export default AnalyticsTopbar;
