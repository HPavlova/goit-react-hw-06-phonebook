import React from 'react';
import propTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label className={styles.Filter__label}>
        Find contacts by name
        <input
          className={styles.Filter__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={value}
          onChange={event => {
            onChangeFilter(event.target.value);
          }}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired,
};

export default Filter;
