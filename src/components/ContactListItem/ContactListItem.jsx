import css from './ContactListItem.module.css';

export default function ContactListItem({ name, number }) {
  return (
    <p className={css.contactListText}>
      {name}: {number}
    </p>
  );
}
