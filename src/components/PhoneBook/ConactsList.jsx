import css from './PhoneBook.module.css';
import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contacts__list}>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
};
