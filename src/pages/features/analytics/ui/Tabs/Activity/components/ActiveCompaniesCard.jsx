import React from "react";
import styles from './activeCompaniesCard.module.css';

const ActiveCompaniesCard = ({companies}) => {

    const maxValue = Math.max(...companies.categories.map((c) => c.value));

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.header__inner}>
                    <h2>Active Companies</h2>

                    <div className={styles.totalWrapper}>
                        <h1>{companies.total} Companies</h1>

                        <div className={styles.growthBadge}>
                            <span>↑ 12%</span>
                        </div>
                    </div>

                    <p className={styles.periodLabel}>This Year</p>
                </div>

                <select
                    className={styles.select}
                >
                    <option value="year">Year</option>
                    <option value="month">Month</option>
                </select>
            </div>

            <div className={styles.grid}>
                {companies.categories.map((item) => {
                    const widthPercent = (item.value / maxValue) * 100;

                    return (
                        <div key={item.id} className={styles.row}>
                            <span className={styles.label}>{item.label}</span>
                            <div className={styles.row__inner}>
                                <div className={styles.barWrapper}>
                                    <div
                                        className={styles.barFill}
                                        style={{width: `${widthPercent}%`}}
                                    ></div>
                                </div>
                                <span className={styles.value}>{item.value}</span>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ActiveCompaniesCard;