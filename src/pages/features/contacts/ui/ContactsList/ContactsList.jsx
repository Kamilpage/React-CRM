import Grid from "../Grid/Grid.jsx";
import ContactCard from "../Card/ContactCard.jsx";
import {useContacts} from "../../context/contactsContext.jsx";


const ContactsList = ({ onSelect }) => {
    const { contacts } = useContacts();

    return (
        <div style={{marginLeft: "248px"}}>

        <Grid>
            {contacts.map(contact => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    onClick={() => onSelect(contact)}
                />
            ))}
        </Grid>
        </div>
    );
};

export default ContactsList;