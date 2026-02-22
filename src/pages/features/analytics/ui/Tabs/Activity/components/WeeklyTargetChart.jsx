import React from "react";
import styles from './weeklyTargetChart.module.css'

const WeeklyTargetChart = ({ data }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Completed Project Target This Week</h2>

            <div className={styles.chart}>
                {data.days.map((d) => {
                    const completedPercent = (d.completed / d.target) * 100;

                    return (
                        <div key={d.day} className={styles.column}>
                            <div className={styles.barWrapper}>
                                <div className={styles.targetBar}></div>

                                <div
                                    className={styles.completedBar}
                                    style={{ height: `${completedPercent}%` }}
                                ></div>
                            </div>

                            <span className={styles.label}>{d.day}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WeeklyTargetChart;