import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { useDashboard } from '../../context/DashboardContext';
import { COMPANY_CATEGORIES } from '../../model/dashboard.companyCategories';
import styles from './companyCategories.module.css';

const CompanyCategoriesChart = () => {
    const {
        companies,
        companiesCategory,
        setCompaniesCategory,
    } = useDashboard();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    // считаем данные
    const data = COMPANY_CATEGORIES.map((cat) => ({
        ...cat,
        value: companies.filter(
            (c) => c.industry === cat.key
        ).length,
    })).filter((d) => d.value > 0);

    return (
        <motion.div
            ref={ref}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
        >
            <h3 className={styles.title}>
                Company Categories
            </h3>

            <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="label"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={3}
                        onClick={(data) =>
                            setCompaniesCategory(
                                companiesCategory === data.key
                                    ? null
                                    : data.key
                            )
                        }
                    >
                        {data.map((entry) => (
                            <Cell
                                key={entry.key}
                                fill={entry.color}
                                opacity={
                                    !companiesCategory ||
                                    companiesCategory === entry.key
                                        ? 1
                                        : 0.3
                                }
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            <div className={styles.legend}>
                {data.map((item) => (
                    <div
                        key={item.key}
                        className={`${styles.legendItem} ${
                            companiesCategory === item.key
                                ? styles.active
                                : ''
                        }`}
                        onClick={() =>
                            setCompaniesCategory(
                                companiesCategory === item.key
                                    ? null
                                    : item.key
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
        </motion.div>
    );
};

export default CompanyCategoriesChart;
