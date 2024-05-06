import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
        <ul className={css.contactList}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Contact {...contact} />
            </li>
          ))}
        </ul>
    </div>
  );
};

export default ContactList;