import css from './PhoneBook.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input value={value} onChange={onChange} className={css.form__input} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange:PropTypes.func
};
