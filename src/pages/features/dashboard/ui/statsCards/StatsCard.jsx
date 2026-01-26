import styles from './statsCards.module.css';

const StatsCard = ({ title, value, icon, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            {icon && (
                <div className={styles.icon}>
                    <img src={icon} alt="" />
                </div>
            )}
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>
                <strong className={styles.value}>{value}</strong>
            </div>
        </div>
    );
};

export default StatsCard;
