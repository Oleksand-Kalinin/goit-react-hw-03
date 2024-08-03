import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsData from "./data/contactsData.json";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contactsData")) ?? contactsData
  );
  const [filterContacts, setFilterContacts] = useState("");

  useEffect(() => {
    localStorage.setItem("contactsData", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContactsData = contacts.filter((el) =>
    el.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  const onAddContact = (newContact) => {
    const finalContacts = [newContact, ...contacts];
    setContacts(finalContacts);
    setFilterContacts("");
  };

  const onDeleteContact = (contactId) => {
    const finalContacts = contacts.filter((el) => el.id !== contactId);
    setContacts(finalContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox
        filterContacts={filterContacts}
        setFilterContacts={setFilterContacts}
      />
      <ContactList
        contactsData={filteredContactsData}
        deleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
