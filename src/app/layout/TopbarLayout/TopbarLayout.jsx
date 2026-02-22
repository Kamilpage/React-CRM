import React from 'react';
import styles from './topbarLayout.module.css';

const TopbarLayout = ({ left, right }) => {
    return (
        <div className={styles.tasks}>
            <div className={styles.tasks__display}>
                {left}
            </div>

            <div className={styles.tasks__right}>
                {right}
            </div>
        </div>
    );
};

export default TopbarLayout;
