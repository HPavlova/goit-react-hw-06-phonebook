export const getFilter = state => state.contacts.filter;
export const getVisibleContacts = ({ contacts: { items, filter } }) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
