import { Outlet } from "react-router-dom";
import DashboardTopbar from "./DashboardTopbar.jsx";
import styles from './dashboard.module.css'

const DashboardLayout = () => {
    return (
        <div className={styles.layout}>
            <DashboardTopbar />

            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
