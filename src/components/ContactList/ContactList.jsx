import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contactsData }) {
  return (
    <ul className={css.contactList}>
      {contactsData.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <Contact userName={name} userTelephoneNumber={number} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
