import { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import styles from './ContactForm.module.css';

import { addContact } from '../../redux/contacts/contacts-actions';

function ContactForm() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const searchSameName = contacts.find(
      contact => contact.name.toLowerCase() === contacts.name.toLowerCase(),
    );

    if (searchSameName) {
      alert(`${contacts.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, contacts]);
    }
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <label className={styles.ContactForm__label}>
        Name
        <input
          className={styles.ContactForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.ContactForm__label}>
        Number
        <input
          className={styles.ContactForm__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.ContactForm__button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  name: propTypes.string,
  number: propTypes.string,
};

export default ContactForm;
