import { DashboardProvider } from './context/DashboardContext';
import StatsCards from './ui/StatsCards/StatsCards';
import OverviewSection from "./ui/Overview/OverviewSection.jsx";
import PeopleTable from "./ui/PeopleTable/PeopleTable.jsx";
import CompaniesTable from "./ui/CompaniesTable/CompaniesTable.jsx";
import CompanyCategoriesChart from "./ui/Charts/CompanyCategoriesChart.jsx";

const Dashboard = () => {
    return (
        <DashboardProvider>
            <StatsCards />
            <OverviewSection />
            <PeopleTable/>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr ', gap: 24 }}>
                <CompaniesTable />
                <CompanyCategoriesChart />
            </div>        </DashboardProvider>
    );
};

export default Dashboard;