import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import { useDashboard } from '../../context/DashboardContext';
import styles from './companyCategories.module.css';

const CompanyCategoriesChart = () => {
    const { companies, companiesCategory, setCompaniesCategory } = useDashboard();

    // Динамические категории
    const categories = [...new Set(companies.map(c => c.industry))];

    // Генерация цветов (можно вынести в отдельный файл)
    const colorMap = {
        'SaaS': '#6366f1',
        'Music': '#22c55e',
        'Search engine': '#f59e0b',
        'Adventure': '#ec4899'
    };

    const data = categories.map(cat => ({
        key: cat,
        label: cat,
        color: colorMap[cat] || '#94a3b8',
        value: companies.filter(c => c.industry === cat).length
    }));

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Company Categories</h3>

            <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="label"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={3}
                        onClick={(item) =>
                            setCompaniesCategory(
                                companiesCategory === item.key ? null : item.key
                            )
                        }
                    >
                        {data.map(entry => (
                            <Cell
                                key={entry.key}
                                fill={entry.color}
                                opacity={!companiesCategory || companiesCategory === entry.key ? 1 : 0.3}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            <div className={styles.legend}>
                {data.map(item => (
                    <div
                        key={item.key}
                        className={`${styles.legendItem} ${
                            companiesCategory === item.key ? styles.active : ''
                        }`}
                        onClick={() =>
                            setCompaniesCategory(
                                companiesCategory === item.key ? null : item.key
                            )
                        }
                    >
                        <span
                            className={styles.dot}
                            style={{ background: item.color }}
                        />
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyCategoriesChart;
