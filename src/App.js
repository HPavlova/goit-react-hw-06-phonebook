import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import useLocalStorage from './hooks/useLocalStorage';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);

  const [filter, setFilter] = useState('');

  function addContact(name, number) {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const searchSameName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, contact]);
    }
  }

  function deleteContact(contactID) {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  }

  function changeFilter(filter) {
    setFilter(filter);
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>

      <Filter value={filter} onChangeFilter={changeFilter} />

      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
