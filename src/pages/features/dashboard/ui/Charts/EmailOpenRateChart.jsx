import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import { useDashboard } from '../../context/DashboardContext';
import styles from './emailChart.module.css';

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const data = payload[0].payload;

    return (
        <div className={styles.tooltip}>
            <div className={styles.tooltipTitle}>
                {data.month || data.year}
            </div>
            <div className={styles.tooltipValue}>
                Open Rate {data.value}%
            </div>
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
                        <XAxis dataKey={dataKey} tickLine={false} axisLine={false} />

                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

                        <Bar
                            dataKey="value"
                            radius={[4, 4, 0, 0]}
                            fill="#ddd"
                        />

                        <Bar
                            dataKey="value"
                            data={data.filter((d) => d.active)}
                            radius={[4, 4, 0, 0]}
                            fill="#000"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default EmailOpenRateChart;
