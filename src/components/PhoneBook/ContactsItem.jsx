import css from './PhoneBook.module.css';
import PropTypes from 'prop-types';

export const ContactsItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contacts__item}>
    <span className={css.contacts__text}>{name}:</span>
    <span className={css.contacts__text}>{number}</span>
    <button className={css.form__btn} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};


