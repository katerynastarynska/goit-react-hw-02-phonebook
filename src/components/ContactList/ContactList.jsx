import ContactListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList({ contacts, onDeleteContact }) {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <ContactListItem name={name} number={number} />
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
