export default function ContactListItem({ name, number }) {
  return (
    <div>
      <p>
        {name}: {number}
      </p>
    </div>
  );
}
