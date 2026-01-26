import UpcomingAgenda from '../Agenda/UpcomingAgenda';
import EmailOpenRateChart from '../Charts/EmailOpenRateChart';
import styles from './overviewSection.module.css';

const OverviewSection = () => {
    return (
        <section className={styles.wrapper}>
            <UpcomingAgenda />
            <EmailOpenRateChart />
        </section>
    );
};

export default OverviewSection;