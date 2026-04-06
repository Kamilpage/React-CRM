import styles from './settings.module.css';
import TopbarLayout from "../../../../app/layout/TopbarLayout/TopbarLayout.jsx";

const SettingsPage = () => {
    return (
        <>
            <TopbarLayout left={<h1>Settings</h1>} />

            <div className={styles.container}>

                {/* PROFILE */}
                <div className={styles.section}>
                    <h3>Profile</h3>

                    <div className={styles.row}>
                        <label>Name</label>
                        <input defaultValue="Alex Johnson" />
                    </div>

                    <div className={styles.row}>
                        <label>Email</label>
                        <input defaultValue="alex@mail.com" />
                    </div>
                </div>

                {/* PREFERENCES */}
                <div className={styles.section}>
                    <h3>Preferences</h3>

                    <div className={styles.row}>
                        <label>Theme</label>
                        <select>
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                    </div>

                    <div className={styles.row}>
                        <label>Language</label>
                        <select>
                            <option>English</option>
                            <option>Русский</option>
                        </select>
                    </div>
                </div>

                {/* NOTIFICATIONS */}
                <div className={styles.section}>
                    <h3>Notifications</h3>

                    <div className={styles.row}>
                        <label>Email Notifications</label>
                        <input type="checkbox" defaultChecked />
                    </div>
                </div>

                {/* SECURITY */}
                <div className={styles.section}>
                    <h3>Security</h3>

                    <div className={styles.row}>
                        <button className={styles.primary}>
                            Change Password
                        </button>

                        <button className={styles.danger}>
                            Logout
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SettingsPage;