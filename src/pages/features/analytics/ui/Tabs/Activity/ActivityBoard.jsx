import React from 'react';
import styles from './activityBoard.module.css'
import {useAnalytics} from "../../../contex/AnalyticsContext.jsx";
import CompletedTasksCard from "./components/CompletedTasksCard.jsx";
import ActiveProjectsChart from "./components/ActiveProjectsChart.jsx";
import TopCompaniesCard from "./components/TopCompaniesCard.jsx";
import ActiveCompaniesCard from "./components/ActiveCompaniesCard.jsx";
import WeeklyTargetChart from "./components/WeeklyTargetChart.jsx";


const ActivityBoard = () => {

    const { state } = useAnalytics();


    return (
        <div className={styles.activity}>
            <div className={styles.leftColumn}>
                <CompletedTasksCard summary={state.activitySummary} />
                <TopCompaniesCard companies={state.topCompanies} />
            </div>
            <div className={styles.rightColumn}>
            <ActiveProjectsChart
                data={{
                    total: state.activitySummary.activeProjects.total,
                    growth: state.activitySummary.activeProjects.growth.value,
                    chart: state.activityChartData[state.period]
                }}
            />
            </div>
            <ActiveCompaniesCard companies={state.activeCompanies} />
            <WeeklyTargetChart data={state.weeklyTarget} />
        </div>
    );
};

export default ActivityBoard;