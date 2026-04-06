import styles from './integrations.module.css';
import Card from "../../contacts/ui/Card/Card.jsx";

const IntegrationCard = ({ integration, onClick }) => {
    return (
        <div onClick={onClick}>
            <Card>
                <div className={styles.header}>
                    <img src={integration.logo} className={styles.logo} />

                    <div>
                        <div className={styles.name}>{integration.name}</div>
                        <div className={styles.desc}>
                            {integration.description}
                        </div>
                    </div>
                </div>

                <div className={styles.status}>
                    {integration.connected ? (
                        <span className={styles.connected}>Connected</span>
                    ) : (
                        <span className={styles.notConnected}>Not connected</span>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default IntegrationCard;