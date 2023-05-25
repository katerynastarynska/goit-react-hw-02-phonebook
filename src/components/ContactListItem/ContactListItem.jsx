import PropTypes from 'prop-types';

import css from './ContactListItem.module.css';

export default function ContactListItem({ name, number }) {
  return (
    <p className={css.contactListText}>
      {name}: {number}
    </p>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
