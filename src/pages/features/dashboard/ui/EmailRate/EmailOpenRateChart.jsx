import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

import { useDashboard } from '../../context/DashboardContext.jsx';
import styles from './emailChart.module.css';

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const data = payload[0].payload;

    return (
        <div className={styles.tooltip}>
            <div className={styles.tooltipTitle}>{data.month || data.year}</div>

            <div className={styles.tooltipBlock}>
                <span className={styles.tooltipLabel}>Open Rate</span>
                <span className={styles.tooltipValue}>{data.value}%</span>
            </div>

            <div className={styles.arrow} />
        </div>
    );
};
const EmailOpenRateChart = () => {
    const {
        emailMonth,
        emailYear,
        periodType,
        setPeriodType,
    } = useDashboard();

    const data = periodType === 'month' ? emailMonth : emailYear;
    const dataKey = periodType === 'month' ? 'month' : 'year';

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.heading}>Average Email Open Rate</h3>

                    <div className={styles.rate}>
                        <span className={styles.rateValue}>64,23%</span>
                        <span className={styles.rateGrowth}>+12%</span>
                    </div>

                    <span className={styles.subtitle}>Average Open Rate</span>
                </div>

                <div className={styles.controls}>
                    <button
                        className={periodType === 'year' ? styles.activeBtn : ''}
                        onClick={() => setPeriodType('year')}
                    >
                        January, 2020 – December, 2023
                    </button>

                    <button
                        className={periodType === 'month' ? styles.activeBtn : ''}
                        onClick={() => setPeriodType('month')}
                    >
                        Month
                    </button>
                </div>
            </div>

            <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={data}>
                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="#e5e5e5"
                        />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 16, fill: "#000000" }}
                            ticks={[0, 25, 50, 75, 100]}
                            domain={[0, 100]}
                            tickFormatter={(v) => `${v}%`}
                            dx={-5}
                        />

                        <XAxis
                            dataKey={dataKey}
                            tickLine={false}
                            axisLine={false}
                            dy={12}
                            tick={{ fontSize: 16, fill: "#000000" }}
                        />

                        <Tooltip
                            content={(props) => <CustomTooltip {...props} />}
                            cursor={{ fill: 'transparent' }}
                            wrapperStyle={{ transition: 'none' }}
                            isAnimationActive={false}
                        />

                        <Bar
                            dataKey="value"
                            radius={[6, 6, 0, 0]}
                            fill="#d9d9d9"
                            className={styles.bar}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default EmailOpenRateChart;