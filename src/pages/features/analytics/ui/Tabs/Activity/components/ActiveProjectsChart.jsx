import React, {useState} from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

import styles from "./activeProjectsChart.module.css";
import { useAnalytics } from "../../../../contex/AnalyticsContext.jsx";
import CustomSelect from "../../../../../../../shared/ui/CustomSelect/CustomSelect.jsx";

const ActiveProjectsChart = ({ data }) => {
    const { state, dispatch } = useAnalytics();
    const [dateRange, setDateRange] = useState("January 2023 — December 2023");

    const chartData = data.chart.data;
    const xKey = state.period === "month" ? "date" : "year";

    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const formatXAxis = (value) => {
        if (state.period === "month") {
            const monthIndex = Number(value.split("-")[1]) - 1;
            return MONTHS[monthIndex];
        }
        return value;
    };
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.header__inner}>
                    <h2>Active Projects</h2>

                    <div className={styles.totalWrapper}>
                        <h1>{data.total} Projects</h1>

                        <div className={styles.growthBadge}>
                            <span>↑ {data.growth}%</span>
                        </div>
                    </div>

                    <p className={styles.periodLabel}>
                        {state.period === "month" ? "This Month" : "This Year"}
                    </p>
                </div>

                <div className={styles.filters}>

                    {/* Диапазон дат (пока статический, нативный select) */}
                    <CustomSelect
                        value={dateRange}             // строка
                        options={[
                            "January 2023 — December 2023",
                            "2022 — 2023"
                        ]}
                        onChange={setDateRange}
                    />

                    {/* ПЕРИОД (Month/Year) */}
                    <CustomSelect
                        value={state.period}          // строка
                        options={["month", "year"]}
                        onChange={(v) => dispatch({ type: "SET_PERIOD", payload: v })}
                    />
                </div>
            </div>

            {/* График */}
            <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={260}>
                    <LineChart data={chartData}>
                        <CartesianGrid stroke="#E5E5E5" vertical={false} />

                        <XAxis
                            dataKey={xKey}
                            tick={{ fontSize: 16 }}
                            tickFormatter={formatXAxis}
                            dy={16}
                        />

                        <YAxis tick={{ fontSize: 12 }} />

                        <Tooltip
                            labelFormatter={(label) =>
                                state.period === "month"
                                    ? `Month: ${label}`
                                    : `Year: ${label}`
                            }
                            contentStyle={{
                                background: "#fff",
                                borderRadius: "10px",
                                border: "1px solid #e5e5e5",
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#000"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ActiveProjectsChart;