import css from "./SearchBox.module.css";

function SearchBox({ filterContacts, setFilterContacts }) {
  return (
    <div className={css.wrapperFilterContacts}>
      <p className={css.findContacts}>Find contacts by name</p>
      <input
        className={css.inputSearchContacts}
        type="text"
        value={filterContacts}
        onChange={(evt) => setFilterContacts(evt.target.value)}
      />
    </div>
  );
}

export default SearchBox;
