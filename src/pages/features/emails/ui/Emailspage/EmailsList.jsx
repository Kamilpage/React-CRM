import styles from "./emails.module.css";
import EmailCard from "../EmailCard/EmailCard.jsx";
import {useEmails} from "../../contex/EmailsContext.jsx";

const EmailsList = () => {
    const { emails } = useEmails();

    return (
        <div className={styles.grid}>
            {emails.map((email) => (
                <EmailCard key={email.id} email={email} />
            ))}
        </div>
    );
};

export default EmailsList;