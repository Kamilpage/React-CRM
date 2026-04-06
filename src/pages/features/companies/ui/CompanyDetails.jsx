import styles from './companyDetails.module.css';

const CompanyDetails = ({ company }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img src={company.logo} className={styles.logo} />

                <div>
                    <h2>{company.name}</h2>
                    <p>{company.industry}</p>
                </div>
            </div>

            <div className={styles.info}>
                <div>
                    <span>Employees</span>
                    <p>{company.employees}</p>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.primary}>
                    🌐 Visit Website
                </button>

                <button className={styles.secondary}>
                    ➕ Add Contact
                </button>
            </div>
        </div>
    );
};

export default CompanyDetails;