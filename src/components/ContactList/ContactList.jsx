import ContactListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList({ contacts }) {
  console.log(contacts);
  return (
      <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <ContactListItem name={contact.name} number={contact.number} />
      </li>
    ))}
  </ul>
  )

}
