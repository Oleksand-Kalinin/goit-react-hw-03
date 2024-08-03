import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contactsData, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contactsData.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <Contact
            userId={id}
            userName={name}
            userTelephoneNumber={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
