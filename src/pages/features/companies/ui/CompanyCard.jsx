import styles from './companies.module.css';
import Card from "../../contacts/ui/Card/Card.jsx";

const CompanyCard = ({ company, onClick }) => {
    return (
        <div onClick={onClick}>
            <Card>
                <div className={styles.header}>
                    <img
                        src={company.logo}
                        alt={company.name}
                        className={styles.logo}
                    />

                    <div>
                        <div className={styles.name}>{company.name}</div>
                        <div className={styles.industry}>
                            {company.industry}
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    👥 {company.employees}
                </div>
            </Card>
        </div>
    );
};

export default CompanyCard;