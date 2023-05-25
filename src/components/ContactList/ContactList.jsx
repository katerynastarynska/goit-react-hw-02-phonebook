import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  console.log(contacts);
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.contactListItem} key={id}>
          <ContactListItem name={name} number={number} />
          <button className={css.contactListBtn} onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
