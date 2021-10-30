import React from 'react';
import propTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.ContactList}>
    {contacts.map(contact => (
      <li className={styles.ContactList__item} key={contact.id}>
        {contact.name + ': ' + contact.number}
        <button
          type="button"
          className={styles.ContactList__button}
          name="delete"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDeleteContact: propTypes.func,
  contacts: propTypes.arrayOf(propTypes.object),
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }),
};

export default ContactList;
