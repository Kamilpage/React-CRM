import React from "react";
import styles from './topCompaniesCard.module.css'
const TopCompaniesCard = ({ companies }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Top Companies</h2>

            <ol className={styles.list}>
                {companies.map((item, index) => (
                    <li key={item.id} className={styles.item}>

                        {/* Номер */}
                        <span className={styles.index}>{index + 1}.</span>

                        {/* Лого + Название */}
                        <div className={styles.company}>
                            <img
                                src={`/logos/${item.logo}`}
                                alt={item.name}
                                className={styles.logo}
                            />
                            <span className={styles.name}>{item.name}</span>
                        </div>

                        {/* Индикатор тренда */}
                        <div
                            className={
                                item.trend === "up"
                                    ? styles.trendUp
                                    : styles.trendDown
                            }
                        >
                            <span className={styles.arrow}>
                                {item.trend === "up" ? "↑" : "↓"}
                            </span>
                            <span className={styles.change}>{item.change}</span>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TopCompaniesCard;